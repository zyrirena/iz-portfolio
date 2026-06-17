import Link from 'next/link';
import { siteConfig } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 mt-24">
      <div className="container-content py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="font-semibold text-lg tracking-tight">
              {siteConfig.name}<span className="text-teal-400">.</span>
            </Link>
            <p className="mt-3 text-sm text-ink-500 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-ink-500">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-ink-700 hover:text-ink-900 transition-colors">About</Link></li>
              <li><Link href="/projects" className="text-ink-700 hover:text-ink-900 transition-colors">Projects</Link></li>
              <li><Link href="/blog" className="text-ink-700 hover:text-ink-900 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-ink-700 hover:text-ink-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-ink-500">
              Connect
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-700 hover:text-ink-900 transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
              {siteConfig.social.linkedin && (
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-700 hover:text-ink-900 transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </li>
              )}
              {siteConfig.social.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.social.email}`}
                    className="text-ink-700 hover:text-ink-900 transition-colors"
                  >
                    Email
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-ink-500">
            © {year} {siteConfig.name}. Built with Next.js · Designed with care.
          </p>
          <p className="text-xs text-ink-400">
            Deployed on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
