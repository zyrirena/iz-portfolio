'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/data/site';
import clsx from 'clsx';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-all duration-500 ease-apple',
        scrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-ink-200/60'
          : 'bg-transparent'
      )}
    >
      <nav
        className="container-content flex items-center justify-between h-16 sm:h-20"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="font-semibold tracking-tight text-lg text-ink-900 hover:opacity-80 transition-opacity"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
          <span className="text-teal-400">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-ink-700 hover:text-ink-900 rounded-full hover:bg-ink-100 transition-all duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm py-2 px-4"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-ink-900 hover:bg-ink-100 transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={clsx(
          'md:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-xl border-b border-ink-200 transition-all duration-500 ease-apple',
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
      >
        <ul className="container-content py-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium text-ink-900 hover:text-teal-600 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
