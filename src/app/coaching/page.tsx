import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { siteConfig } from '@/data/site';
import { asset } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Coaching',
  description:
    'Career and leadership coaching for federal HR professionals and military spouses navigating transitions — ICF-aligned and confidential.',
};

const focusAreas = [
  {
    title: 'Federal HR to what’s next',
    body: 'Whether you’re eyeing a supervisory role, prepping for a promotion, or considering a move to the private sector, we work from real knowledge of how federal hiring and advancement actually work.',
  },
  {
    title: 'Career continuity through every PCS',
    body: 'Frequent moves shouldn’t mean starting over. We build a career strategy that travels with you — through relocations, employment gaps, and licensing hurdles.',
  },
  {
    title: 'Confidential, ICF-aligned',
    body: 'What you share stays between us, in line with the ICF Code of Ethics — that matters when your career, and sometimes your clearance, are both on the line.',
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
        <FadeIn>
          <div className="card p-8 sm:p-12 bg-gradient-to-br from-pink-100 via-white to-teal-100 border-ink-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-display-md font-display text-ink-900">
                  About your coach
                </h2>
                <p className="mt-4 text-ink-600 leading-relaxed">
                  {coaching.bio}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {coaching.whyBackground.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink-700"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-teal-400"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-ink-200 bg-[#060a0e] shadow-card">
                  <video
                    controls
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={asset(coaching.explainerVideo)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="mt-3 text-sm text-ink-500 text-center">
                  What is coaching?
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="container-content pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {focusAreas.map((p, idx) => (
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

      <section className="container-content pb-16">
        <FadeIn>
          <span className="eyebrow">Client feedback</span>
          <h2 className="mt-3 text-display-md font-display text-ink-900 mb-8">
            What clients say.
          </h2>
        </FadeIn>
        {coaching.testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {coaching.testimonials.map((t, idx) => (
              <FadeIn key={t.name} delay={idx * 80}>
                <div className="card p-8 h-full">
                  <p className="text-ink-600 leading-relaxed">“{t.quote}”</p>
                  <p className="mt-4 text-sm font-medium text-ink-900">{t.name}</p>
                  {t.role && <p className="text-sm text-ink-500">{t.role}</p>}
                </div>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn delay={80}>
            <div className="card p-8 sm:p-10 text-center bg-gradient-to-br from-pink-100 via-white to-teal-100 border-ink-200">
              <p className="text-ink-600 max-w-xl mx-auto">
                I’m currently building my practice hours through peer and
                pro-bono sessions — client testimonials will start appearing
                here soon.
              </p>
            </div>
          </FadeIn>
        )}
      </section>

      <section className="container-content pb-16">
        <FadeIn>
          <div className="card p-8 sm:p-12 bg-gradient-to-br from-pink-100 via-white to-teal-100 border-ink-200">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr] gap-8 md:gap-12 items-center">
              <div className="mx-auto w-full max-w-[320px]">
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-ink-200 bg-[#060a0e] shadow-card">
                  <video
                    controls
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={asset('/videos/coaching/how-coaching-works.mp4')} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div>
                <h2 className="text-display-md font-display text-ink-900">
                  See how coaching actually works
                </h2>
                <p className="mt-3 text-ink-600 leading-relaxed max-w-xl">
                  A quick look at what a professional coaching conversation is
                  really like — before you book a session.
                </p>
                <div className="mt-6">
                  <a href="#book" className="btn-primary">
                    Book a session
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
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

              <div className="mt-8 card p-6 sm:p-8 border-ink-200 bg-white/60">
                <h3 className="text-lg font-display font-semibold tracking-tight text-ink-900">
                  {coaching.waitlist.heading}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed max-w-xl">
                  {coaching.waitlist.body}
                </p>
                {coaching.waitlist.url ? (
                  <a
                    href={coaching.waitlist.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary mt-4 inline-flex"
                  >
                    Join the waitlist <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <p className="mt-4 text-xs text-ink-400">
                    Waitlist signup opening soon.
                  </p>
                )}
              </div>
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
