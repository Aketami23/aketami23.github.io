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

export type PresentationItem = {
  date: string;
  endDate?: string;
  title: string | LocalizedText;
  event: LocalizedText;
  location: LocalizedText;
  format: 'oral' | 'poster';
  upcoming?: boolean;
  award?: LocalizedText;
  href: string;
};

export const presentations: PresentationItem[] = [
  {
    date: '2026-10-31',
    title: {
      en: 'Improving RNA template search and residue alignment accuracy using predicted structures',
      ja: '予測構造を用いたRNAテンプレート検索と残基対応精度の改善',
    },
    event: { en: '10th Tokyo Bioinformatics Meeting', ja: 'Tokyo Bioinformatics Meeting 第10回研究会' },
    location: { en: 'Keio University, Yagami Campus', ja: '慶應義塾大学 矢上キャンパス' },
    format: 'oral',
    upcoming: true,
    href: 'https://sites.google.com/site/tokyobioinformaticsmeeting/',
  },
  {
    date: '2026-10-31',
    title: {
      en: 'Template-assisted machine learning for RNA tertiary structure prediction without additional training',
      ja: 'テンプレートを利用した追加学習を用いない機械学習によるRNA立体構造予測',
    },
    event: { en: '10th Tokyo Bioinformatics Meeting', ja: 'Tokyo Bioinformatics Meeting 第10回研究会' },
    location: { en: 'Keio University, Yagami Campus', ja: '慶應義塾大学 矢上キャンパス' },
    format: 'poster',
    upcoming: true,
    href: 'https://sites.google.com/site/tokyobioinformaticsmeeting/',
  },
  {
    date: '2026-10-02',
    endDate: '2026-10-04',
    title: {
      en: 'Investigating the use of template information in deep learning-based RNA 3D structure prediction',
      ja: '深層学習を用いたRNA三次元構造予測におけるテンプレート情報の利用方法の検討',
    },
    event: { en: '18th Annual Meeting of Young Researchers in Bioinformatics', ja: '生命情報科学若手の会 第18回年会' },
    location: { en: 'Shonan Village Center, Kanagawa', ja: '湘南国際村センター（神奈川）' },
    format: 'poster',
    href: 'https://sites.google.com/view/bioinfowakate/activities/meetings/第18回-年会',
  },
  {
    date: '2026-06-19',
    title: 'Multi-objective optimization for designing structurally similar proteins with dissimilar sequences',
    event: { en: 'AI4X-Accelerate 2026', ja: 'AI4X-Accelerate 2026' },
    location: { en: 'Raffles City Convention Centre, Singapore', ja: 'Raffles City Convention Centre（シンガポール）' },
    format: 'oral',
    href: 'https://openreview.net/forum?id=wXu96N9h54',
  },
  {
    date: '2025-12-10',
    title: 'Multi-objective optimization for designing structurally similar proteins with dissimilar sequences',
    event: { en: '1st Biomolecular Design Workshop', ja: '第1回生体分子設計研究会' },
    location: { en: 'Institute of Science Tokyo, Yushima Campus', ja: '東京科学大学 湯島キャンパス' },
    format: 'oral',
    href: 'https://biomol-des-ws.github.io/activities/1/',
  },
  {
    date: '2025-10-30',
    title: 'Multi-Objective Optimization for Designing Structurally Similar Proteins with Diverse Sequence',
    event: { en: 'CBI Annual Meeting 2025', ja: 'CBI学会2025年大会' },
    location: { en: 'Tower Hall Funabori, Tokyo', ja: 'タワーホール船堀（東京）' },
    format: 'oral',
    award: { en: 'Oral Presentation Award', ja: '口頭発表賞' },
    href: 'https://cbi-society.org/taikai/taikai25/abstracts/Oral_ab/O06-06.html',
  },
];

export const workExperience = [
  {
    organization: 'Computational Drug Discovery Laboratory',
    href: 'https://cddlab.io/',
    roles: [
      {
        period: { en: 'Aug 2026 – Present', ja: '2026年8月〜現在' },
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
        period: { en: 'Sep 2025 – Jul 2026', ja: '2025年9月〜2026年7月' },
        role: { en: 'Engineer', ja: 'エンジニア' },
        type: { en: 'Part-time', ja: 'パート・アルバイト' },
        descriptions: [
          {
            text: {
              en: 'Manuscript in preparation.',
              ja: '論文執筆中。',
            },
          },
        ],
      },
      {
        period: { en: 'Jul 2025 – Sep 2025', ja: '2025年7月〜2025年9月' },
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
