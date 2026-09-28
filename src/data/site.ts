// Single source of truth for personal and site-wide content.
// Edit values here — no need to touch component code.

export const siteConfig = {
  name: 'Irena',
  title: 'Irena — Exploring & Building Ethical AI for Fun',
  description:
    "Irena's personal playground — a student studying Responsible AI, sharing hobby projects, academic experiments, and her learning journey.",
  // Your deployed URL (no trailing slash).
  url: 'https://pizdryk.com',
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
      'I’m Irena. I have over eight years of experience in federal human resources, advising leadership on workforce strategy, recruitment, and personnel policy for a large public-sector organization. My work has also included international liaison work and adult instruction. I’m finishing a Master of Science in Management with a Graduate Certificate in Responsible AI at George Mason University, training toward my ICF coaching credential, and running CraftyGalShop, my online shop for personalized off-roading gifts.',
    hrLeadership: [
      'Advise leadership on workforce strategy, recruitment, and personnel policy',
      'Manage full-cycle recruitment for a range of vacancies, domestic and international',
      'Interpret federal regulations into clear, practical guidance for hiring managers',
      'Provide oversight and quality control for junior HR staff',
    ],
    trainingInstruction: [
      'Serve as adjunct faculty, delivering HR training to a distributed public-sector workforce',
      'Lead virtual instruction for learners across multiple locations',
      'Translate complex regulatory and policy content into adult-learner-friendly materials',
      'Lean Six Sigma Yellow Belt',
    ],
    international: [
      'Served as a liaison between U.S. organizations and international partners',
      'Managed multinational stakeholder relationships across language and culture',
      'Advised leadership on cross-cultural and governance considerations',
      'Bilingual: English and Polish',
    ],
    studyingAi: [
      'Master of Science in Management, George Mason University',
      'Graduate Certificate in Responsible Artificial Intelligence, George Mason University',
      'Bringing a policy and fairness lens from HR into how AI systems get built and governed',
      'Hands-on practice with data and AI tools — R Studio, Jupyter Notebook, Visual Studio',
      'Building hobby AI projects — like LeanMind AI — as a practical complement to coursework',
    ],
    education: [
      {
        degree: 'Master of Science in Management',
        detail: 'Costello College of Business, George Mason University — Fairfax, VA',
        date: 'Expected December 2026 · 3.76 GPA',
      },
      {
        degree: 'Graduate Certificate in Responsible Artificial Intelligence',
        detail: 'George Mason University — Fairfax, VA',
        date: 'August 2026',
      },
      {
        degree: 'Bachelor of Individualized Study, Entrepreneurship and Information Systems',
        detail: 'George Mason University — Fairfax, VA',
        date: 'December 2025 · Graduated with Recognition, 3.88 GPA',
      },
      {
        degree: 'Applied Science Associate, Information Technology',
        detail: 'Central Texas College — Killeen, TX',
        date: 'December 2014 · Graduated with Honors, 3.91 GPA',
      },
    ],
    certifications: [
      { name: 'ICF Level 1 Coach Training Credential', org: 'SCT Coaching Academy', date: '2026' },
      { name: 'Civilian Education System (CES), Intermediate Level', org: '', date: '2025' },
      { name: 'DoD Human Resources Staffing Advisor Level 1', org: '', date: '2024' },
      { name: 'Equal Opportunity Leader (EOL) Certification', org: '', date: '2020' },
      { name: 'Lean Six Sigma Yellow Belt', org: '', date: '2019' },
    ],
    skills: {
      'HR Systems & Tools': ['Applicant tracking systems', 'Personnel records systems', 'Case management tools'],
      'Productivity & Collaboration': [
        'Microsoft Word',
        'Microsoft Excel',
        'Microsoft PowerPoint',
        'Microsoft Access',
        'Microsoft Publisher',
        'Microsoft Outlook',
        'Microsoft Project',
        'SharePoint',
        'Microsoft Teams',
      ],
      'Data & AI Tools': [
        'R Studio',
        'Jupyter Notebook',
        'Visual Studio',
        'TypeScript',
        'GitHub',
        'Vercel',
      ],
      Languages: ['English (Fluent)', 'Polish (Native)'],
      'Training & Process': ['Lean Six Sigma Yellow Belt', 'Instructional Design', 'Adult Learning'],
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
    bio: 'As a career and leadership coach with a deep background in federal Human Resources, I partner with mission-driven professionals and leaders navigating high-stakes career transitions. My approach is grounded in International Coaching Federation (ICF) standards, combining structured strategic inquiry with practical talent management insights. Whether you are stepping into executive leadership, pivoting between sectors, or redefining your career vision, I provide a confidential, thought-provoking space to challenge your assumptions, uncover your strengths, and build actionable roadmaps that produce measurable results.',
    explainerVideo: '/videos/coaching/what-is-coaching.mp4',
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
