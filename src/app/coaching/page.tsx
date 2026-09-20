import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Coaching',
  description:
    'Book a coaching conversation — ICF-aligned, client-led, and confidential.',
};

const principles = [
  {
    title: 'Your agenda, your pace',
    body: 'Sessions start from what you want to talk about. I ask questions, reflect back what I hear, and help you find your own next step.',
  },
  {
    title: 'Coaching, not advice',
    body: 'Coaching is a partnership. I won’t tell you what to do — I’ll help you think it through and hold you to what you decide.',
  },
  {
    title: 'Confidential by default',
    body: 'What you share stays between us, in line with the ICF Code of Ethics. Coaching is not therapy, medical care, or professional advice.',
  },
];

export default function CoachingPage() {
  const { coaching } = siteConfig;
  const bookingUrl = coaching.bookingUrl.trim();

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 flex items-center justify-center"
        >
          <div className="hero-blob w-[700px] h-[700px] opacity-40" />
        </div>

        <div className="container-content pt-24 pb-12 sm:pt-32 sm:pb-16">
          <FadeIn>
            <span className="eyebrow">{coaching.eyebrow}</span>
            <h1 className="mt-4 text-display-xl font-display text-ink-900 max-w-3xl">
              {coaching.heading}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-600 max-w-2xl leading-relaxed">
              {coaching.intro}
            </p>
            <p className="mt-4 text-base text-ink-600 max-w-2xl leading-relaxed">
              {coaching.credentialNote}
            </p>
            <div className="mt-8">
              <a href="#book" className="btn-primary">
                Book a session
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-content pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {principles.map((p, idx) => (
            <FadeIn key={p.title} delay={idx * 80}>
              <div className="card p-8 h-full">
                <h2 className="text-xl font-display font-semibold tracking-tight text-ink-900">
                  {p.title}
                </h2>
                <p className="mt-3 text-ink-600 leading-relaxed">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="book" className="container-content pb-24 scroll-mt-24">
        <FadeIn>
          <h2 className="text-display-md font-display text-ink-900">
            Book a session
          </h2>
          <p className="mt-3 text-ink-600 max-w-2xl">
            Pick a time that works for you. Times are shown in your local time zone.
          </p>

          {bookingUrl && coaching.embed ? (
            <div className="mt-8">
              <div className="card overflow-hidden">
                <iframe
                  src={bookingUrl}
                  title="Book a coaching session"
                  className="block w-full h-[760px] border-0"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-sm text-ink-500">
                Calendar not loading?{' '}
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Open the booking page in a new tab ↗
                </a>
              </p>
            </div>
          ) : bookingUrl ? (
            <div className="mt-8 card p-8 sm:p-12 bg-gradient-to-br from-pink-100 via-white to-teal-100 border-ink-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coaching.sessionTypes.map((t) => (
                  <div key={t.title}>
                    <h3 className="text-xl font-display font-semibold tracking-tight text-ink-900">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-ink-600 leading-relaxed">{t.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book a session <span aria-hidden="true">↗</span>
                </a>
                {coaching.intakeFormUrl && (
                  <a
                    href={coaching.intakeFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Pro-bono intake form <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
              <p className="mt-5 text-sm text-ink-500">
                {coaching.bookingNote}
              </p>
            </div>
          ) : (
            <div className="mt-8 card p-10 sm:p-14 text-center bg-gradient-to-br from-pink-100 via-white to-teal-100 border-ink-200">
              <h3 className="text-2xl font-display font-semibold tracking-tight text-ink-900">
                Booking opens soon
              </h3>
              <p className="mt-3 text-ink-600 max-w-xl mx-auto">
                The booking calendar is being set up. In the meantime, say hello
                and I’ll let you know as soon as sessions are available.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Say hello on GitHub <span aria-hidden="true">→</span>
                </a>
                <Link href="/contact" className="btn-secondary">
                  More ways to connect
                </Link>
              </div>
            </div>
          )}
        </FadeIn>
      </section>
    </>
  );
}
