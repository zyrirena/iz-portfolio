import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Timeline from '@/components/Timeline';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name} — federal HR professional, responsible-AI graduate student, coach in training, and small-shop owner.`,
};

const skillCategoryColors: Record<string, string> = {
  'HR Systems & Tools': 'bg-teal-100 text-teal-700',
  'Productivity & Collaboration': 'bg-ink-100 text-ink-700',
  'Data & AI Tools': 'bg-pink-100 text-pink-700',
  Languages: 'bg-pink-100 text-pink-700',
  'Training & Process': 'bg-teal-100 text-teal-700',
};

const timeline = [
  {
    date: '2023 — Present',
    title: 'Senior Human Resources Specialist',
    description:
      'Advise leadership within a federal agency on workforce strategy, recruitment, and personnel policy for a large, multinational organization; mentor junior HR staff.',
    tag: 'Current',
  },
  {
    date: '2025 — Present',
    title: 'Adjunct Faculty, HR Training',
    description:
      'Deliver virtual HR training and instruction to a geographically distributed public-sector workforce.',
    tag: 'Current',
  },
  {
    date: '2019 — 2023',
    title: 'Human Resources Specialist',
    description:
      'Advised leadership on classification, staffing, and employee relations within a federal HR office, including an international liaison assignment.',
  },
];

export default function AboutPage() {
  const { about } = siteConfig;

  const sections: Array<{ title: string; items: string[]; tone: 'pink' | 'teal' }> = [
    { title: 'Federal HR Leadership', items: about.hrLeadership, tone: 'teal' },
    { title: 'Training & Instruction', items: about.trainingInstruction, tone: 'pink' },
    { title: 'International & Cross-Cultural', items: about.international, tone: 'teal' },
    { title: 'Studying Responsible AI', items: about.studyingAi, tone: 'pink' },
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
              A little about me.
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
              Professional toolkit.
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

      {/* Education & Certifications */}
      <section className="section pt-0">
        <div className="container-content">
          <FadeIn>
            <span className="eyebrow">Credentials</span>
            <h2 className="mt-3 text-display-md font-display text-ink-900 mb-10">
              Education & certifications.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <FadeIn delay={80}>
              <div className="card p-6 sm:p-8 h-full">
                <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-ink-500">
                  Education
                </h3>
                <ul className="mt-5 space-y-5">
                  {about.education.map((e) => (
                    <li key={e.degree}>
                      <p className="font-semibold text-ink-900 leading-snug">{e.degree}</p>
                      <p className="mt-1 text-sm text-ink-600">{e.detail}</p>
                      <p className="mt-1 text-sm text-ink-500">{e.date}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={160}>
              <div className="card p-6 sm:p-8 h-full">
                <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-ink-500">
                  Certifications
                </h3>
                <ul className="mt-5 space-y-5">
                  {about.certifications.map((c) => (
                    <li key={c.name}>
                      <p className="font-semibold text-ink-900 leading-snug">{c.name}</p>
                      <p className="mt-1 text-sm text-ink-600">
                        {c.org ? `${c.org} · ` : ''}
                        {c.date}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
