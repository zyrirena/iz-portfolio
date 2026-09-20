// Single source of truth for personal and site-wide content.
// Edit values here — no need to touch component code.

export const siteConfig = {
  name: 'Irena',
  title: 'Irena — Exploring & Building Ethical AI for Fun',
  description:
    "Irena's personal playground — a student studying Responsible AI, sharing hobby projects, academic experiments, and her learning journey.",
  // Replace with your deployed URL (no trailing slash).
  url: 'https://zyrirena.github.io/iz-portfolio',
  // OG image relative to /public.
  ogImage: '/images/og-default.png',
  locale: 'en_US',

  social: {
    github: 'https://github.com/zyrirena',
    // Add others when you'd like, e.g. linkedin, twitter, email.
    linkedin: '',
    twitter: '',
    email: '',
  },

  hero: {
    eyebrow: 'Student · Responsible AI Hobbyist',
    headline: 'Exploring & Building Ethical AI for Fun',
    subheadline:
      "This is my personal playground. I'm currently studying Responsible AI and using this space to share my hobby projects, academic experiments, and learning journey.",
    primaryCta: { label: 'View Projects', href: '/projects' },
    secondaryCta: { label: 'Read Blog', href: '/blog' },
  },

  about: {
    intro:
      "I'm Irena — a product-minded engineer who builds AI systems that solve real, measurable problems for real people. I care about responsible AI, thoughtful product design, and shipping software that earns the trust of its users.",
    aiInterests: [
      'Large language model applications',
      'Behavioral and wellness AI',
      'Multimodal interfaces',
      'Retrieval-augmented systems',
      'Personalization and recommender systems',
    ],
    responsibleAi: [
      'Privacy-preserving design',
      'Transparent model behavior',
      'Bias auditing and evaluation',
      'Human-in-the-loop systems',
      'Safety-aware product decisions',
    ],
    productDevelopment: [
      'End-to-end product ownership: discovery → ship → learn',
      'Rapid prototyping with modern AI stacks',
      'User research and behavioral design',
      'Cross-functional collaboration',
    ],
    research: [
      'Applied LLM evaluation',
      'Behavior change through AI coaching',
      'Human-AI interaction patterns',
      'Decision-support tooling',
    ],
    skills: {
      Languages: ['TypeScript', 'Python', 'SQL'],
      'AI & ML': ['LLMs', 'LangChain', 'OpenAI API', 'Anthropic API', 'Embeddings', 'RAG'],
      Frontend: ['React', 'Next.js', 'Tailwind CSS'],
      Backend: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis'],
      Infra: ['Vercel', 'AWS', 'Docker', 'GitHub Actions'],
    },
  },

  // Blog categories (also used for filtering on /blog).
  blogCategories: [
    'Artificial Intelligence',
    'Responsible AI',
    'Product Development',
    'Personal Projects',
    'Technology',
  ] as const,

  // Repositories to feature on the homepage GitHub section.
  // (These are presentational — no API call needed for the static build.)
  featuredRepos: [
    {
      name: 'wellness-coach-ai',
      description:
        'AI-powered behavioral coaching platform for healthier habits, meal planning, and motivation.',
      language: 'TypeScript',
      stars: 0,
      url: 'https://github.com/zyrirena/wellness-coach-ai',
    },
    {
      name: 'irena-portfolio',
      description: 'This website — a statically-exported Next.js portfolio deployed to GitHub Pages.',
      language: 'TypeScript',
      stars: 0,
      url: 'https://github.com/zyrirena/iz-portfolio',
    },
  ],

  contact: {
    heading: "Let's geek out over AI.",
    body: 'I am always happy to connect with fellow students, hobbyists, or anyone passionate about ethical tech. Feel free to explore my code on GitHub or say hello!',
  },
};

export type SiteConfig = typeof siteConfig;
export type BlogCategory = (typeof siteConfig.blogCategories)[number];
