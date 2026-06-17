// Single source of truth for personal and site-wide content.
// Edit values here — no need to touch component code.

export const siteConfig = {
  name: 'Irena',
  title: 'Irena — Building Practical AI Solutions',
  description:
    'Irena is an AI product builder and researcher focused on practical applications that improve wellness, productivity, decision-making, and user experiences.',
  // Replace with your deployed URL (no trailing slash).
  url: 'https://your-username.github.io/irena-portfolio',
  // OG image relative to /public.
  ogImage: '/images/og-default.png',
  locale: 'en_US',

  social: {
    github: 'https://github.com/your-username',
    // Add others when you'd like, e.g. linkedin, twitter, email.
    linkedin: '',
    twitter: '',
    email: '',
  },

  hero: {
    eyebrow: 'AI Product Builder · Researcher',
    headline: 'Building Practical AI Solutions for Real-World Problems',
    subheadline:
      'I design and build AI-powered applications that improve wellness, productivity, decision-making, and user experiences.',
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
      url: 'https://github.com/your-username/wellness-coach-ai',
    },
    {
      name: 'irena-portfolio',
      description: 'This website — a statically-exported Next.js portfolio deployed to GitHub Pages.',
      language: 'TypeScript',
      stars: 0,
      url: 'https://github.com/your-username/irena-portfolio',
    },
  ],

  contact: {
    heading: "Let's build something useful.",
    body: 'Interested in collaborating, discussing AI, or exploring project opportunities? Connect with me on GitHub.',
  },
};

export type SiteConfig = typeof siteConfig;
export type BlogCategory = (typeof siteConfig.blogCategories)[number];
