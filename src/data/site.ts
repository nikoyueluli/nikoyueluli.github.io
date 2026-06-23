export type Lang = 'en' | 'zh';

export const profile = {
  name: { en: 'Yuelu Li', zh: '李玥璐' },
  title: {
    en: 'PhD Student in Computational Media and Arts',
    zh: '计算媒体与艺术博士生'
  },
  affiliation: {
    en: 'Information Hub · HKUST (Guangzhou)',
    zh: '信息枢纽 · 香港科技大学（广州）'
  },
  email: 'yli883@connect.hkust-gz.edu.cn',
  scholar: 'https://scholar.google.com/citations?user=XbaGdGEAAAAJ&hl=en',
  advisors: [
    { role: { en: 'Supervisor', zh: '主导师' }, name: 'David Kei Man Yip', url: 'https://www.daveyip.com/' },
    { role: { en: 'Co-supervisor', zh: '副导师' }, name: 'Cheuk Yi Kelvin Yuen', url: 'https://kelvincyyuen.com/' }
  ]
};

export const copy = {
  en: {
    nav: { home: 'Home', about: 'About', publications: 'Publications', projects: 'Projects' },
    eyebrow: 'Human–AI Collaboration · Creative HCI · AIGC',
    intro: 'I study how AI can become a thoughtful creative partner—supporting narrative and visual content creation, creative decision-making, and storytelling workflows.',
    viewWork: 'Explore my research',
    contact: 'Get in touch',
    selected: 'Selected publications',
    selectedIntro: 'Recent work across creator-centered AI and visual storytelling.',
    allPublications: 'All publications',
    publicationsIntro: 'Research spanning human–AI collaboration, storytelling, visualization, and social media.',
    aboutTitle: 'About me',
    aboutIntro: 'My work sits at the intersection of creativity, technology, and human experience.',
    bio: 'I am a PhD student in Computational Media and Arts at the Hong Kong University of Science and Technology (Guangzhou). I hold an MPhil degree in Computational Media and Arts from HKUST(GZ) and a bachelor’s degree in Media Communication from Yonsei University in South Korea. My research centers on creator-centered human-computer interaction, exploring how AI technologies can support narrative and visual content creation, creative decision-making, and storytelling workflows. My broader research interests include human–AI collaboration, AI applications for creative work, social media content creation, and AIGC.',
    education: 'Education',
    researchInterests: 'Research interests',
    interests: ['Creator-centered HCI', 'Human–AI collaboration', 'Interactive storytelling', 'Visual content creation', 'Social media', 'AIGC'],
    projectsTitle: 'Projects',
    projectsIntro: 'Creative research and artistic practice that connect emerging technology with storytelling.',
    projectLink: 'View exhibition',
    scholarLink: 'View full profile on Google Scholar',
    footer: 'PhD student exploring AI, creativity, and storytelling.',
    current: 'Present'
  },
  zh: {
    nav: { home: '首页', about: '关于我', publications: '论文', projects: '项目' },
    eyebrow: '人机协作 · 创意人机交互 · 人工智能生成内容',
    intro: '我的研究关注人工智能如何成为富有思考力的创作伙伴，支持叙事与视觉内容创作、创意决策及故事工作流。',
    viewWork: '探索我的研究',
    contact: '与我联系',
    selected: '精选论文',
    selectedIntro: '近期围绕创作者中心人工智能与视觉叙事开展的研究。',
    allPublications: '全部论文',
    publicationsIntro: '研究涵盖人机协作、故事叙事、可视化与社交媒体。',
    aboutTitle: '关于我',
    aboutIntro: '我的工作位于创造力、技术与人类体验的交汇处。',
    bio: '李玥璐现为香港科技大学（广州）计算媒体与艺术学域博士生。她于香港科技大学（广州）获得计算媒体与艺术哲学硕士学位，并于韩国延世大学获得媒体传播学学士学位。她的研究聚焦以创作者为中心的人机交互，探索人工智能技术如何支持叙事与视觉内容创作、创意决策和故事工作流。她更广泛的研究兴趣包括人机协作、人工智能在创意工作中的应用、社交媒体内容创作及人工智能生成内容。',
    education: '教育经历',
    researchInterests: '研究兴趣',
    interests: ['创作者中心人机交互', '人机协作', '互动叙事', '视觉内容创作', '社交媒体', '人工智能生成内容'],
    projectsTitle: '项目',
    projectsIntro: '连接新兴技术与故事叙事的创意研究及艺术实践。',
    projectLink: '查看展览',
    scholarLink: '在 Google Scholar 查看完整成果',
    footer: '探索人工智能、创造力与故事叙事的博士生。',
    current: '至今'
  }
};

export const education = [
  {
    period: { en: 'Jan 2026 — Present', zh: '2026年1月 — 至今' },
    degree: { en: 'PhD in Computational Media and Arts', zh: '计算媒体与艺术 博士' },
    school: { en: 'The Hong Kong University of Science and Technology (Guangzhou)', zh: '香港科技大学（广州）' },
    detail: { en: 'Information Hub', zh: '信息枢纽' }
  },
  {
    period: { en: 'Sep 2023 — Oct 2025', zh: '2023年9月 — 2025年10月' },
    degree: { en: 'MPhil in Computational Media and Arts', zh: '计算媒体与艺术 哲学硕士' },
    school: { en: 'The Hong Kong University of Science and Technology (Guangzhou)', zh: '香港科技大学（广州）' },
    detail: { en: 'GPA 3.906 / 4.3', zh: 'GPA 3.906 / 4.3' }
  },
  {
    period: { en: 'Sep 2018 — Feb 2023', zh: '2018年9月 — 2023年2月' },
    degree: { en: 'BA in Media, Department of Communication', zh: '媒体传播学 学士' },
    school: { en: 'Yonsei University, South Korea', zh: '韩国延世大学' },
    detail: { en: 'GPA 91.9 / 100', zh: 'GPA 91.9 / 100' }
  }
];
