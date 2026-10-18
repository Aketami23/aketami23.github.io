// Run `npm run cv` to rebuild the CV from the same data as the website.
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { copyFile, mkdir, mkdtemp, readFile, rm } from 'node:fs/promises';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const chrome = [process.env.CHROME_BIN, '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome', '/usr/bin/chromium'].find((path) => path && existsSync(path));
if (!chrome) throw new Error('Chrome or Chromium is required. Set CHROME_BIN to its executable path.');

const html = await readFile(new URL('../dist/cv/index.html', import.meta.url));
const server = createServer((request, response) => {
  if (request.url !== '/cv/') { response.writeHead(404).end(); return; }
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(html);
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const profile = await mkdtemp(join(tmpdir(), 'akiba-cv-'));
const output = resolve('public/ryo-akiba-cv.pdf');
try {
  await mkdir('public', { recursive: true });
  await new Promise((resolve, reject) => {
    const child = spawn(chrome, [
      '--headless', '--disable-gpu', '--no-first-run', '--disable-extensions',
      `--user-data-dir=${profile}`, '--no-pdf-header-footer',
      `--print-to-pdf=${output}`, `http://127.0.0.1:${server.address().port}/cv/`,
    ], { stdio: ['ignore', 'ignore', 'pipe'] });
    let errors = '';
    child.stderr.on('data', (chunk) => { errors += chunk; });
    child.on('error', reject);
    child.on('exit', (code) => code === 0 ? resolve() : reject(new Error(errors || `Chrome exited with code ${code}`)));
  });
  const pdf = await readFile(output);
  if (pdf.subarray(0, 5).toString() !== '%PDF-') throw new Error('Chrome did not produce a PDF.');
  await copyFile(output, resolve('dist/ryo-akiba-cv.pdf'));
  console.log(`Created public/ryo-akiba-cv.pdf (${Math.round(pdf.length / 1024)} KB)`);
} finally {
  await new Promise((resolve) => server.close(resolve));
  await rm(profile, { recursive: true, force: true });
}
