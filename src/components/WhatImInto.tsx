import Link from 'next/link';
import FadeIn from './FadeIn';
import { siteConfig } from '@/data/site';

export default function WhatImInto() {
  const { interests } = siteConfig;

  return (
    <section className="section pt-0">
      <div className="container-content">
        <FadeIn>
          <span className="eyebrow">{interests.eyebrow}</span>
          <h2 className="mt-3 text-display-lg font-display text-ink-900">
            {interests.heading}
          </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {interests.items.map((item, idx) => {
            const span = idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
            const inner = (
              <>
                <span className="eyebrow">{item.label}</span>
                <h3 className="mt-3 text-xl font-display font-semibold tracking-tight text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-ink-600 leading-relaxed">{item.body}</p>
                <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal-600">
                  {item.cta}
                  <span aria-hidden="true">{item.external ? '↗' : '→'}</span>
                </span>
              </>
            );
            const cls = `card card-hover p-6 sm:p-8 flex flex-col ${span}`;
            return (
              <FadeIn key={item.title} delay={idx * 80} className={span}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cls} h-full`}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link href={item.href} className={`${cls} h-full`}>
                    {inner}
                  </Link>
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
