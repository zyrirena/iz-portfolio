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
    tagline: 'Federal HR background · AI hobbyist · coach in training · small-shop owner',
    primaryCta: { label: 'View Projects', href: '/projects' },
    secondaryCta: { label: 'Read Blog', href: '/blog' },
  },

  about: {
    intro:
      'I’m Irena. I have a background in federal HR, where people, policy, and fairness are the daily work — and it shapes how I think about building AI responsibly. These days I’m studying Responsible AI, building hobby projects with AI agents, training toward my ICF coaching credential, and running CraftyGalShop, my online shop for personalized off-roading gifts.',
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
      name: 'LeanMindAI',
      description:
        'A wellness AI built with regulatory compliance from day one — a hobby project testing ethical guardrails.',
      language: 'TypeScript',
      stars: 0,
      url: 'https://github.com/zyrirena/LeanMindAI',
    },
    {
      name: 'irena-portfolio',
      description: 'This website — a statically-exported Next.js portfolio deployed to GitHub Pages.',
      language: 'TypeScript',
      stars: 0,
      url: 'https://github.com/zyrirena/iz-portfolio',
    },
  ],

  // "What I'm into" cards on the home page.
  interests: {
    eyebrow: 'About me',
    heading: 'What I’m into.',
    items: [
      {
        label: 'Build',
        title: 'AI projects for fun',
        body: 'I love tinkering with AI and turning curiosity into working apps.',
        href: '/projects',
        cta: 'See projects',
        external: false,
      },
      {
        label: 'Build responsibly',
        title: 'AI agents with guardrails',
        body: 'I build agent-powered apps with clear AI disclosure, honesty checks, and compliance in mind from day one.',
        href: '/projects/wellness-coach-ai',
        cta: 'See LeanMind AI',
        external: false,
      },
      {
        label: 'Grow',
        title: 'My coaching practice',
        body: 'I’m training toward my ICF credential and offering peer and pro-bono coaching sessions.',
        href: '/coaching',
        cta: 'Book a session',
        external: false,
      },
      {
        label: 'Background',
        title: 'Federal HR experience',
        body: 'I bring a background in federal HR — working with people, policy, and process — to how I think about fair, responsible technology.',
        href: '/about',
        cta: 'About me',
        external: false,
      },
      {
        label: 'Shop',
        title: 'CraftyGalShop',
        body: 'My online shop for personalized gifts for off-roading enthusiasts — custom engraving, blankets, drinkware, and trail-ready humor.',
        href: 'https://craftygalshop.com',
        cta: 'Visit the shop',
        external: true,
      },
    ],
  },

  // Coaching page. Paste your scheduling link (Calendly, Cal.com, Google
  // Calendar appointment page, ...) into bookingUrl to show the calendar.
  coaching: {
    eyebrow: 'Coaching',
    heading: 'Book a coaching conversation.',
    intro:
      'One-to-one coaching for people who want a thinking partner — to get clear on a goal, build a habit that sticks, or work through a decision.',
    credentialNote:
      'I’m training toward an ICF credential and coach in line with the ICF Core Competencies and Code of Ethics.',
    bookingUrl: 'https://calendar.app.google/x9UEYMw2jiH5bCb17',
    // true = show the calendar inline (iframe); false = show a booking button.
    embed: false,
    intakeFormUrl: 'https://forms.gle/pJ6jU2JrLXXznDS17',
    sessionTypes: [
      {
        title: 'Peer coaching exchange',
        body: 'For fellow coaches who want to swap practice hours. We take turns coaching, with time for feedback, in reciprocal sessions of 30 to 60 minutes.',
      },
      {
        title: 'Pro-bono coaching',
        body: 'Free coaching for anyone who wants dedicated support with a personal or professional goal. Choose a 30- or 60-minute session, and please fill in the short intake form first.',
      },
    ],
    bookingNote:
      'Sessions are held on Google Meet, and the link is sent after you book. I’m based in Eastern Time and can be flexible for international schedules. Please bring a specific topic you’d like to work on.',
  },

  contact: {
    heading: "Let's geek out over AI.",
    body: 'I am always happy to connect with fellow students, hobbyists, or anyone passionate about ethical tech. Feel free to explore my code on GitHub or say hello!',
  },
};

export type SiteConfig = typeof siteConfig;
export type BlogCategory = (typeof siteConfig.blogCategories)[number];
