'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { siteConfig } from '@/data/site';
import clsx from 'clsx';
import { OPEN_PALETTE_EVENT } from './CommandPalette';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'Contact', href: '/contact' },
];

const PARTICLE_COLORS = ['#4ECDC4', '#F9D6E5', '#2FB4AB', '#F4B7CE', '#229189'];

function burstParticles(origin: HTMLElement) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const rect = origin.getBoundingClientRect();
  const ox = rect.left + rect.width / 2;
  const oy = rect.top + rect.height / 2;

  for (let i = 0; i < 16; i++) {
    const particle = document.createElement('div');
    const size = 4 + Math.random() * 6;
    Object.assign(particle.style, {
      position: 'fixed',
      left: `${ox}px`,
      top: `${oy}px`,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '9999px',
      background: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
      pointerEvents: 'none',
      zIndex: '200',
    });
    document.body.appendChild(particle);

    const angle = (Math.PI * 2 * i) / 16 + Math.random() * 0.4;
    const dist = 50 + Math.random() * 80;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;

    const anim = particle.animate(
      [
        { transform: 'translate(-50%, -50%) translate(0, 0) scale(1)', opacity: 1 },
        {
          transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(0.3)`,
          opacity: 0,
        },
      ],
      { duration: 650 + Math.random() * 250, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    );
    anim.onfinish = () => particle.remove();
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const clickTimes = useRef<number[]>([]);
  const dotRef = useRef<HTMLSpanElement | null>(null);

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

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(t);
  }, [toast]);

  function openPalette() {
    window.dispatchEvent(new Event(OPEN_PALETTE_EVENT));
  }

  function handleDotClick(e: MouseEvent<HTMLSpanElement>) {
    e.preventDefault();
    e.stopPropagation();
    const now = Date.now();
    clickTimes.current = [...clickTimes.current, now].filter((t) => now - t < 2000);
  if (clickTimes.current.length >= 5) {
      clickTimes.current = [];
      if (dotRef.current) burstParticles(dotRef.current);
      setToast('You found it — thanks for exploring the site.');
    }
  }

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
          <span
            ref={dotRef}
            className="text-teal-400 inline-block"
            onClick={handleDotClick}
          >
            .
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="nav-link relative px-4 py-2 text-sm font-medium text-ink-700 hover:text-ink-900 rounded-full hover:bg-ink-100 transition-all duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="ml-1">
            <button
              type="button"
              onClick={openPalette}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ink-200 text-xs text-ink-500 hover:text-ink-900 hover:border-ink-300 transition-all duration-300 ease-apple"
              aria-label="Open quick navigation"
            >
              <kbd className="font-mono text-[10px] bg-ink-100 px-1.5 py-0.5 rounded">⌘</kbd>
              <kbd className="font-mono text-[10px] bg-ink-100 px-1.5 py-0.5 rounded">K</kbd>
            </button>
          </li>
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
          <li>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openPalette();
              }}
              className="w-full flex items-center justify-between py-3 text-base font-medium text-ink-900"
            >
              Quick navigation
              <span className="text-xs text-ink-400 font-mono">⌘K</span>
            </button>
          </li>
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

      {/* Easter-egg toast */}
      <div
        className={clsx(
          'fixed left-1/2 bottom-8 -translate-x-1/2 z-[200] flex items-center gap-2 px-5 py-3 rounded-full bg-ink-900 text-white text-sm shadow-elevated transition-all duration-500 ease-apple',
          toast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none',
        )}
        role="status"
        aria-live="polite"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-teal-400" aria-hidden="true" />
        {toast}
      </div>
    </header>
  );
}
