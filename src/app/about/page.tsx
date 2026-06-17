import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Timeline from '@/components/Timeline';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name} — AI product builder and researcher focused on practical applications.`,
};

const skillCategoryColors: Record<string, string> = {
  Languages: 'bg-pink-100 text-pink-700',
  'AI & ML': 'bg-teal-100 text-teal-700',
  Frontend: 'bg-ink-100 text-ink-700',
  Backend: 'bg-ink-100 text-ink-700',
  Infra: 'bg-ink-100 text-ink-700',
};

const timeline = [
  {
    date: '2024 — Present',
    title: 'AI Product Builder & Researcher',
    description:
      'Building Wellness Coach AI and exploring practical applications of LLMs in behavioral health and decision-support tooling.',
    tag: 'Current',
  },
  {
    date: '2022 — 2024',
    title: 'Product Engineering',
    description:
      'Shipped consumer and B2B applications with a focus on personalization, recommendation systems, and clean user experiences.',
  },
  {
    date: '2020 — 2022',
    title: 'Foundations',
    description:
      'Software engineering across full-stack web, data pipelines, and early generative-AI experiments.',
  },
];

export default function AboutPage() {
  const { about } = siteConfig;

  const sections: Array<{ title: string; items: string[]; tone: 'pink' | 'teal' }> = [
    { title: 'AI Interests', items: about.aiInterests, tone: 'teal' },
    { title: 'Responsible AI Focus', items: about.responsibleAi, tone: 'pink' },
    { title: 'Product Development', items: about.productDevelopment, tone: 'teal' },
    { title: 'Research Interests', items: about.research, tone: 'pink' },
  ];

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 flex items-center justify-center"
        >
          <div className="hero-blob w-[700px] h-[700px] opacity-40" />
        </div>
        <div className="container-content pt-24 pb-12 sm:pt-32 sm:pb-16">
          <FadeIn>
            <span className="eyebrow">About</span>
            <h1 className="mt-4 text-display-xl font-display text-ink-900 max-w-3xl">
              Practical AI, thoughtful product, real impact.
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-ink-600 max-w-3xl leading-relaxed">
              {about.intro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Portrait placeholder + quick facts */}
      <section className="container-content pb-12">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 aspect-[4/5] rounded-4xl border border-ink-200 bg-gradient-to-br from-pink-100 via-white to-teal-100 flex items-center justify-center">
              <div className="text-center px-6">
                <p className="text-sm font-medium text-ink-600">Portrait placeholder</p>
                <p className="mt-1 text-xs text-ink-500">
                  Replace with a photo at{' '}
                  <code className="bg-white/70 px-1 py-0.5 rounded">
                    /public/images/about/portrait.jpg
                  </code>
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-6">
              {sections.map(({ title, items, tone }) => (
                <div key={title} className="card p-6 sm:p-8">
                  <h2 className="text-xl font-semibold tracking-tight text-ink-900">
                    {title}
                  </h2>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-ink-700"
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                            tone === 'pink' ? 'bg-pink-400' : 'bg-teal-400'
                          }`}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Technical skills */}
      <section className="section">
        <div className="container-content">
          <FadeIn>
            <span className="eyebrow">Toolkit</span>
            <h2 className="mt-3 text-display-md font-display text-ink-900">
              Technical skills.
            </h2>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(about.skills).map(([category, skills], idx) => (
              <FadeIn key={category} delay={idx * 80}>
                <div className="card p-6 h-full">
                  <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-ink-500">
                    {category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills.map((s) => (
                      <span
                        key={s}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          skillCategoryColors[category] ?? 'bg-ink-100 text-ink-700'
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section pt-0">
        <div className="container-content">
          <FadeIn>
            <span className="eyebrow">Journey</span>
            <h2 className="mt-3 text-display-md font-display text-ink-900 mb-12">
              The path so far.
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <Timeline items={timeline} />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
