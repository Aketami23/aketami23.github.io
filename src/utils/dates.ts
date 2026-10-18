import type { PresentationItem } from '../data/profile';

export function formatPresentationDate(item: Pick<PresentationItem, 'date' | 'endDate'>, language: 'en' | 'ja') {
  const formatter = new Intl.DateTimeFormat(language === 'ja' ? 'ja-JP' : 'en-US', {
    year: 'numeric',
    month: language === 'ja' ? 'long' : 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
  const start = new Date(`${item.date}T00:00:00Z`);
  if (!item.endDate) return formatter.format(start);
  const end = new Date(`${item.endDate}T00:00:00Z`);
  if (language === 'ja') {
    const endLabel = item.date.slice(0, 7) === item.endDate.slice(0, 7)
      ? `${end.getUTCDate()}日`
      : formatter.format(end);
    return `${formatter.format(start)}〜${endLabel}`;
  }
  return formatter.formatRange(start, end);
}
