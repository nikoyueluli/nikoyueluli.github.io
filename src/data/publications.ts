export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  date: string;
  pages?: string;
  doi?: string;
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    title: 'Unpacking Discourses on Childbirth and Parenthood in Popular Social Media Platforms Across China, Japan, and South Korea',
    authors: ['Zheng Wei', 'Yunqi Li', 'Yucheng He', 'Yuelu Li', 'Xian Xu', 'Huamin Qu', 'Pan Hui', 'Muzhi Zhou'],
    venue: 'Proceedings of the International AAAI Conference on Web and Social Media (ICWSM)',
    year: 2026,
    date: 'May 2026',
    pages: '2466–2483',
    doi: 'https://doi.org/10.1609/icwsm.v20i1.42761'
  },
  {
    title: 'Exploring Creator-Centric Methods for LLM-Assisted Interactive Storytelling',
    authors: ['Yuelu Li', 'Siyi Wu', 'Lujin Zhang', 'Zhihan Guo', 'Wenchuan Lu', 'David Kei Man Yip'],
    venue: 'Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI)',
    year: 2026,
    date: 'April 2026',
    doi: 'https://doi.org/10.1145/3772318.3791362',
    featured: true
  },
  {
    title: 'Enhancing Emotional Exploration and Self-Expression Through AI-Generated Dynamic Visuals: A Study Inspired by the Rorschach Inkblot Test',
    authors: ['Yuelu Li', 'Yuru Huang', 'Caiyi Chen', 'Xinyang Liu', 'Zeyu Yang', 'David Kei Man Yip'],
    venue: 'Proceedings of the 18th International Symposium on Visual Information Communication and Interaction (VINCI)',
    year: 2025,
    date: 'December 2025'
  },
  {
    title: 'At the Peak: Empirical Patterns for Creating Climaxes in Data Videos',
    authors: ['Zheng Wei', 'Yuelu Li', 'Wenchuan Lu', 'Qiming Gu', 'Huamin Qu', 'Xian Xu'],
    venue: 'IEEE Transactions on Visualization and Computer Graphics, 31(10)',
    year: 2025,
    date: 'October 2025',
    pages: '8696–8710',
    doi: 'https://doi.org/10.1109/TVCG.2025.3576597',
    featured: true
  },
  {
    title: 'Create-to-learn Paradigm: A Proxy Visual Storytelling Tool (PVST) for Stimulating Children’s Story Sense and Structure',
    authors: ['Ka-Yan Fung', 'Lik-Hang Lee', 'Huamin Qu', 'Yuelu Li', 'Shenghui Song', 'David Kei Man Yip'],
    venue: 'Proceedings of the 17th International Symposium on Visual Information Communication and Interaction (VINCI)',
    year: 2024,
    date: 'December 2024',
    pages: 'Article 12, 1–8',
    doi: 'https://doi.org/10.1145/3678698.3678699'
  },
  {
    title: 'Comparing the Different Approaches of LLM with Multi-agents to Character Decision in the Oscar Winning Best Picture ‘The Departed’',
    authors: ['Yuelu Li', 'Junrong Song', 'Chaozhe Zhang', 'Rongrong Chen', 'David Kei Man Yip'],
    venue: 'International Conference of Art, Design & Technology (ICADT)',
    year: 2024,
    date: '2024',
    pages: '111–118',
    doi: 'https://doi.org/10.1007/978-981-96-4341-7_11'
  }
];
