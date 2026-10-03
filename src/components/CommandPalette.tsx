'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { siteConfig } from '@/data/site';

interface PaletteItem {
  label: string;
  hint?: string;
  href: string;
  external?: boolean;
}

const ITEMS: PaletteItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'Book a coaching session', hint: 'Coaching', href: '/coaching/#book' },
  { label: 'Contact', href: '/contact' },
  { label: 'GitHub', hint: 'opens in a new tab', href: siteConfig.social.github, external: true },
];

export const OPEN_PALETTE_EVENT = 'open-command-palette';

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const filtered = ITEMS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()),
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActiveIdx(0);
  }, []);

  const go = useCallback(
    (item: PaletteItem) => {
      close();
      if (item.external) {
        window.open(item.href, '_blank', 'noopener,noreferrer');
      } else {
        router.push(item.href);
      }
    },
    [close, router],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape') {
        close();
      }
    };
    const onOpenEvent = () => setOpen(true);

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpenEvent);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpenEvent);
    };
  }, [close]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const t = window.setTimeout(() => inputRef.current?.focus(), 50);
      return () => {
        window.clearTimeout(t);
        document.body.style.overflow = '';
      };
    }
    document.body.style.overflow = '';
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[14vh] bg-ink-900/40 backdrop-blur-sm px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      role="presentation"
    >
      <div
        className="w-full max-w-xl bg-white rounded-3xl shadow-elevated overflow-hidden animate-fade-in-up"
        role="dialog"
        aria-modal="true"
        aria-label="Quick navigation"
      >
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIdx(0);
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
            } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              setActiveIdx((i) => Math.max(i - 1, 0));
            } else if (e.key === 'Enter' && filtered[activeIdx]) {
              go(filtered[activeIdx]);
            }
          }}
          placeholder="Jump to a page..."
          autoComplete="off"
          spellCheck={false}
          className="w-full border-0 outline-none px-6 py-5 text-base text-ink-900 placeholder:text-ink-400 border-b border-ink-100"
        />
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <p className="px-4 py-6 text-sm text-ink-400 text-center">No matches.</p>
          )}
          {filtered.map((item, idx) => (
            <button
              key={item.href}
              type="button"
              onMouseEnter={() => setActiveIdx(idx)}
              onClick={() => go(item)}
              className={clsx(
                'w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl text-sm transition-colors duration-150 text-left',
                idx === activeIdx ? 'bg-teal-100 text-ink-900' : 'text-ink-700',
              )}
            >
              <span className="flex items-center gap-2.5">
                <span
                  className={clsx(
                    'w-1.5 h-1.5 rounded-full shrink-0',
                    idx === activeIdx ? 'bg-teal-500' : 'bg-ink-300',
                  )}
                  aria-hidden="true"
                />
                {item.label}
              </span>
              <span className="text-xs text-ink-400">{item.hint ?? '↵ go'}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
