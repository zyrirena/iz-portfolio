import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Connect with ${siteConfig.name} on GitHub and elsewhere.`,
};

export default function ContactPage() {
  const channels: Array<{ name: string; url: string; description: string; primary?: boolean }> = [
    {
      name: 'GitHub',
      url: siteConfig.social.github,
      description: 'See what I’m building. Open issues and PRs welcome.',
      primary: true,
    },
    siteConfig.social.linkedin
      ? {
          name: 'LinkedIn',
          url: siteConfig.social.linkedin,
          description: 'Professional network and career updates.',
        }
      : null,
    siteConfig.social.twitter
      ? {
          name: 'Twitter / X',
          url: siteConfig.social.twitter,
          description: 'Thoughts and updates on AI and product.',
        }
      : null,
    siteConfig.social.email
      ? {
          name: 'Email',
          url: `mailto:${siteConfig.social.email}`,
          description: 'For longer conversations and opportunities.',
        }
      : null,
  ].filter(Boolean) as Array<{ name: string; url: string; description: string; primary?: boolean }>;

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
            <span className="eyebrow">Contact</span>
            <h1 className="mt-4 text-display-xl font-display text-ink-900 max-w-3xl">
              {siteConfig.contact.heading}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-600 max-w-2xl leading-relaxed">
              {siteConfig.contact.body}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-content pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {channels.map((c, idx) => (
            <FadeIn key={c.name} delay={idx * 80}>
              <a
                href={c.url}
                target={c.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={c.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className={`card card-hover p-8 sm:p-10 flex items-start gap-5 ${
                  c.primary ? 'md:col-span-2 bg-gradient-to-br from-pink-100 via-white to-teal-100 border-ink-200' : ''
                }`}
              >
                <span
                  className={`shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-2xl text-lg font-semibold ${
                    c.primary ? 'bg-ink-900 text-white' : 'bg-ink-100 text-ink-700'
                  }`}
                  aria-hidden="true"
                >
                  {c.name.charAt(0)}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-display font-semibold tracking-tight text-ink-900">
                    {c.name} <span aria-hidden="true" className="text-ink-400 font-normal">↗</span>
                  </h2>
                  <p className="mt-2 text-ink-600">{c.description}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
