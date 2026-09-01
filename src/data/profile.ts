export type LocalizedText = { en: string; ja: string };

export type Link = { label: string; href: string };

export type ResearchItem = {
  number: string;
  title: string;
  image: string;
  imageAlt: string;
  summary: LocalizedText;
  meta?: string;
  authors?: string;
  venue?: string;
  links: Link[];
  presentations?: Array<{ period: string; title: string; detail: string; href: string }>;
};

export const research: ResearchItem[] = [
  {
    number: '01',
    title: 'Multi-objective optimization for designing structurally similar proteins with dissimilar sequences',
    image: 'https://www.tandfonline.com/cms/asset/35322a57-35b3-4707-bf04-e55132f8b606/tstm_a_2611575_uf0001_oc.jpg',
    imageAlt: 'Graphical abstract for multi-objective protein design balancing structural similarity and sequence diversity',
    summary: {
      en: 'Developed a protein design method that balances structural similarity with sequence diversity.',
      ja: '構造の類似性を保ちながら配列の多様性を高める、タンパク質の設計手法を開発しました。',
    },
    authors: 'Ryo Akiba, Yoshitaka Moriwaki, Ryuichiro Ishitani, and Naruki Yoshikawa',
    venue: 'Science and Technology of Advanced Materials: Methods, 6(1), 2611575 (2026)',
    links: [{ label: 'Paper', href: 'https://doi.org/10.1080/27660400.2025.2611575' }],
    presentations: [
      { period: '2026', title: 'AI4X-Accelerate 2026', detail: 'Oral presentation', href: 'https://ai4x.cc/2026/about/' },
      { period: '2025', title: 'CBI学会2025年大会', detail: '口頭発表・口頭発表賞', href: 'https://cbi-society.org/taikai/taikai25/index.html' },
      { period: '2025', title: '生体分子デザイン研究会', detail: '研究発表', href: 'https://biomol-des-ws.github.io/activities' },
    ],
  },
  {
    number: '02',
    title: 'AI-assisted troubleshooting of biological experiments',
    image: 'https://pfn-web-static-contents-kuroco.s3.ap-northeast-1.amazonaws.com/uploads/blog/2025/12/image1-1.png',
    imageAlt: 'Overview of an agent workflow for detecting errors in biological experiment protocols',
    summary: {
      en: 'Developed an LLM-based agent workflow that identifies errors in biological experiment protocols by generating hypotheses and validating them against external knowledge.',
      ja: '生物学実験のプロトコルに含まれるエラーについて仮説を生成し、外部知識を用いて検証するLLMベースのエージェントワークフローを開発しました。',
    },
    meta: 'Research manuscript',
    links: [{ label: 'Tech Blog', href: 'https://tech.preferred.jp/ja/blog/bioexp_agent_error_detection/' }],
  },
];

export const workExperience = [
  {
    organization: 'Computational Drug Discovery Laboratory',
    href: 'https://cddlab.io/',
    roles: [
      {
        period: { en: 'Aug 2026—Present', ja: '2026年8月—現在' },
        role: { en: 'Research Assistant', ja: 'リサーチアシスタント' },
        type: { en: 'Part-time', ja: 'パート・アルバイト' },
        descriptions: [
          {
            text: {
              en: 'Multi-objective optimization for designing structurally similar proteins with dissimilar sequences.',
              ja: '構造的に類似しながら配列が異なるタンパク質の多目的最適化設計。',
            },
            research: '01',
          },
          {
            text: {
              en: 'Research on improving the chemical validity of ligand structures generated in protein–ligand complexes.',
              ja: 'タンパク質–リガンド複合体の生成において、リガンド構造の化学的妥当性を高めるための研究。',
            },
          },
        ],
      },
    ],
  },
  {
    organization: 'Preferred Networks, Inc.',
    href: 'https://www.preferred.jp/',
    roles: [
      {
        period: { en: 'Sep 2025—Jul 2026', ja: '2025年9月—2026年7月' },
        role: { en: 'Engineer', ja: 'エンジニア' },
        type: { en: 'Part-time', ja: 'パート・アルバイト' },
        descriptions: [
          {
            text: {
              en: 'Research on the automated construction and analysis of a benchmark for AI-assisted troubleshooting of biological experiments (under review).',
              ja: '生物学実験のAI支援トラブルシューティング用ベンチマークの自動構築・分析に関する研究（under review）。',
            },
          },
        ],
      },
      {
        period: { en: 'Jul 2025—Sep 2025', ja: '2025年7月—2025年9月' },
        role: { en: 'Summer Intern', ja: '夏季インターン' },
        type: { en: 'Internship', ja: 'インターンシップ' },
        descriptions: [
          {
            text: {
              en: 'Worked on AI-assisted troubleshooting of biological experiments.',
              ja: '生物学実験のAI支援トラブルシューティングに取り組みました。',
            },
            research: '02',
          },
        ],
      },
    ],
  },
];

export const activities = [
  {
    period: '2024', title: 'iGEM TokyoTech 2024', href: 'https://2024.igem.wiki/tokyotech/',
    detail: { en: 'Sub-leader', ja: 'サブリーダー' },
    description: { en: 'RNA pesticide delivery using engineered membrane vesicles.', ja: '遺伝子組換え膜小胞を用いたRNA農薬の送達システム。' },
    achievements: [
      { label: { en: 'iGEM Gold Medal', ja: 'iGEM 金メダル' } },
      { label: { en: 'Judges’ Award, Lean Launchpad National Competition 2025 Kyoto', ja: 'リーンローンチパッド全国大会2025京都 審査員賞' }, href: 'https://startupbrain.jp/works/j1xTpxxW' },
    ],
  },
  {
    period: '2023', title: 'iGEM TokyoTech 2023', href: 'https://2023.igem.wiki/tokyotech/',
    detail: { en: 'Dry Lab member', ja: 'Dry Labメンバー' },
    description: { en: 'Low-cost, high-throughput assays for dengue surveillance.', ja: 'デング熱サーベイランスのための低コスト・高スループット検査法。' },
    achievements: [{ label: { en: 'iGEM Silver Medal', ja: 'iGEM 銀メダル' } }],
  },
];
