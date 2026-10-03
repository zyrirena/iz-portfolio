'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

const STORAGE_KEY = 'iz_welcome_seen';

type Step = 'hidden' | 'entering' | 'question' | 'answered';

interface Branch {
  label: string;
  response: string;
  cta: { label: string; href: string };
}

const BRANCHES: Branch[] = [
  {
    label: 'Exploring AI projects',
    response:
      "Nice — I'm a Responsible AI hobbyist, so you'll find real builds, experiments, and the occasional lesson learned the hard way.",
    cta: { label: 'See my projects', href: '/projects' },
  },
  {
    label: 'Curious about coaching',
    response:
      'I coach people navigating federal HR careers and military-spouse transitions. There’s a quick self-assessment if you want to see whether it’s a fit.',
    cta: { label: 'Explore coaching', href: '/coaching' },
  },
  {
    label: 'Just looking around',
    response: 'Welcome! Here’s a bit about who I am, what I’m studying, and why this site exists.',
    cta: { label: 'Learn more about me', href: '/about' },
  },
];

/**
 * A small animated mascot that greets first-time visitors, asks one
 * question, and routes them toward the most relevant part of the site.
 * Only ever shown once per browser (tracked in localStorage) and fully
 * inert under prefers-reduced-motion (the site-wide CSS rule zeroes the
 * entrance animation; the component still functions, just without motion).
 */
export default function WelcomeGuide() {
  const router = useRouter();
  const [step, setStep] = useState<Step>('hidden');
  const [chosen, setChosen] = useState<Branch | null>(null);

  useEffect(() => {
    let seen = true;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      seen = false;
    }
    if (seen) return;

    const t = window.setTimeout(() => setStep('entering'), 900);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (step !== 'entering') return;
    const t = window.setTimeout(() => setStep('question'), 550);
    return () => window.clearTimeout(t);
  }, [step]);

  function markSeen() {
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore — worst case the guide shows again next visit
    }
  }

  function dismiss() {
    setStep('hidden');
    markSeen();
  }

  function choose(branch: Branch) {
    setChosen(branch);
    setStep('answered');
  }

  function goToCta() {
    if (chosen) router.push(chosen.cta.href);
    markSeen();
    setStep('hidden');
  }

  if (step === 'hidden') return null;

  const visible = step === 'question' || step === 'answered';

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 flex items-end gap-3 max-w-[calc(100vw-2.5rem)]"
      role="complementary"
      aria-label="Welcome guide"
    >
      <div
        className={clsx(
          'relative w-[21rem] max-w-full bg-white rounded-3xl shadow-elevated border border-ink-200/70 p-5 pt-6 origin-bottom-right transition-all duration-500 ease-apple',
          visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-3',
        )}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close welcome message"
          className="absolute top-3 right-3 inline-flex items-center justify-center w-7 h-7 rounded-full text-ink-400 hover:text-ink-900 hover:bg-ink-100 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="flex items-start gap-3">
          <div
            className={clsx(
              'shrink-0 w-11 h-11 rounded-full flex items-center justify-center',
              visible && 'avatar-bounce-in',
            )}
            style={{
              background: 'linear-gradient(135deg, #4ECDC4 0%, #F9D6E5 100%)',
            }}
            aria-hidden="true"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="8.5" cy="10.5" r="1.4" fill="#18181B" />
              <circle cx="15.5" cy="10.5" r="1.4" fill="#18181B" />
              <path
                d="M8 15c1.2 1.1 2.6 1.6 4 1.6s2.8-.5 4-1.6"
                stroke="#18181B"
                strokeWidth="1.6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          <div className="pt-1">
            {step === 'question' && (
              <>
                <p className="text-sm text-ink-900 leading-relaxed">
                  <span aria-hidden="true">&#128075;</span> Hi, I&apos;m Irena! Welcome to my little corner
                  of the internet. What brings you here today?
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {BRANCHES.map((branch) => (
                    <button
                      key={branch.label}
                      type="button"
                      onClick={() => choose(branch)}
                      className="btn-ghost justify-start text-left text-sm py-2 px-3 bg-ink-50 hover:bg-ink-100 rounded-2xl"
                    >
                      {branch.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 'answered' && chosen && (
              <>
                <p className="text-sm text-ink-900 leading-relaxed">{chosen.response}</p>
                <div className="mt-4 flex items-center gap-3">
                  <button type="button" onClick={goToCta} className="btn-accent text-sm py-2 px-4">
                    {chosen.cta.label}
                  </button>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="text-xs text-ink-400 hover:text-ink-700 transition-colors"
                  >
                    No thanks, just browsing
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
