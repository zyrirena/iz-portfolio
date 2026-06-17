import Link from 'next/link';
import { siteConfig } from '@/data/site';
import FadeIn from './FadeIn';

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="hero-blob w-[900px] h-[900px] max-w-[120vw] max-h-[120vw]" />
      </div>

      <div className="container-content pt-24 pb-24 sm:pt-32 sm:pb-32 lg:pt-40 lg:pb-40">
        <div className="max-w-4xl">
          <FadeIn>
            <span className="eyebrow">{hero.eyebrow}</span>
          </FadeIn>

          <FadeIn delay={100} as="h1">
            <span className="block text-display-2xl font-display text-ink-900 mt-5">
              {hero.headline}
            </span>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-ink-600 max-w-2xl">
              {hero.subheadline}
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={hero.primaryCta.href} className="btn-primary">
                {hero.primaryCta.label}
                <span aria-hidden="true">→</span>
              </Link>
              <Link href={hero.secondaryCta.href} className="btn-secondary">
                {hero.secondaryCta.label}
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Hero visual placeholder */}
        <FadeIn delay={400}>
          <div className="mt-20 sm:mt-24 relative">
            <div className="relative aspect-[16/9] rounded-4xl overflow-hidden border border-ink-200 shadow-elevated bg-gradient-to-br from-pink-100 via-white to-teal-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/70 backdrop-blur-md border border-white/60 shadow-soft mb-6">
                    <svg
                      className="w-10 h-10 text-teal-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-ink-700">
                    Hero visual placeholder
                  </p>
                  <p className="text-xs text-ink-500 mt-1">
                    Replace with your image at{' '}
                    <code className="text-xs bg-white/70 px-1 py-0.5 rounded">
                      /public/images/hero/main.jpg
                    </code>
                  </p>
                </div>
              </div>
            </div>
            {/* Floating accents */}
            <div
              aria-hidden="true"
              className="absolute -top-6 -left-6 w-24 h-24 rounded-3xl bg-pink-300/70 blur-2xl animate-float"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-teal-300/60 blur-2xl animate-float"
              style={{ animationDelay: '1.5s' }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
