'use client';

import { useState } from 'react';
import clsx from 'clsx';

interface QuizOption {
  label: string;
  /** Short phrase used to personalize the result copy. */
  tag?: string;
  /** Only the readiness question carries a weight — it alone decides the result. */
  weight?: number;
}

interface QuizQuestion {
  prompt: string;
  options: QuizOption[];
}

const QUESTIONS: QuizQuestion[] = [
  {
    prompt: 'Where are you right now?',
    options: [
      { label: 'Weighing a promotion, a pivot, or a move out of federal HR', tag: 'a federal HR transition' },
      { label: 'Adjusting to a recent or upcoming PCS move', tag: 'a PCS move' },
      { label: 'Honestly, a bit of both', tag: 'a transition with a few moving parts' },
      { label: 'Something else entirely, but it is a transition', tag: 'a transition of your own' },
    ],
  },
  {
    prompt: 'How clear are you on what’s next?',
    options: [
      { label: 'Pretty clear — I just need a plan and someone to keep me honest' },
      { label: 'I have ideas, but nothing is sticking yet' },
      { label: 'Not clear at all — I need to think out loud with someone' },
    ],
  },
  {
    prompt: 'What’s weighing on you most?',
    options: [
      { label: 'Navigating federal hiring, promotion, or HR rules', tag: 'the federal process' },
      { label: 'Rebuilding momentum after a move — gaps, licensing, starting over', tag: 'rebuilding momentum after a move' },
      { label: 'Confidence — knowing what I actually bring to the table', tag: 'building confidence' },
      { label: 'Just feeling stretched thin and reactive', tag: 'feeling stretched thin' },
    ],
  },
  {
    prompt: 'How do you like to work through big decisions?',
    options: [
      { label: 'Talking it through with someone who gets the context' },
      { label: 'Reflecting on my own first, then testing it with someone' },
      { label: 'I haven’t found an approach that works yet' },
    ],
  },
  {
    prompt: 'Could you commit to regular sessions over the next couple of months?',
    options: [
      { label: 'Yes — I’m ready to start now', weight: 2 },
      { label: 'Probably — I want to learn more first', weight: 1 },
      { label: 'Not yet — just exploring for now', weight: 0 },
    ],
  },
];

const READINESS_INDEX = QUESTIONS.length - 1;

interface Result {
  heading: string;
  body: string;
  primaryCta: boolean;
  secondaryNote: string;
}

function buildResult(readinessWeight: number, situationTag: string, painTag: string): Result {
  if (readinessWeight === 2) {
    return {
      heading: 'This sounds like a strong fit.',
      body: `What you picked points to exactly what this coaching is built for — ${situationTag}, especially around ${painTag}. Sessions are currently peer coaching and pro-bono while I train toward my ICF credential, so there’s very little to lose by starting.`,
      primaryCta: true,
      secondaryNote: '',
    };
  }
  if (readinessWeight === 1) {
    return {
      heading: 'Coaching could help — no pressure to decide today.',
      body: `${situationTag[0].toUpperCase()}${situationTag.slice(1)} is exactly the kind of transition this coaching is for, and ${painTag} is common territory in these sessions. If you want to test it out, sessions are currently peer coaching and pro-bono — a low-stakes way to see if it fits before anything’s official.`,
      primaryCta: true,
      secondaryNote: 'Not ready for a session yet? You can join the waitlist below instead.',
    };
  }
  return {
    heading: 'You might not be ready yet — and that’s okay.',
    body: 'Sounds like you’re still finding your footing on what’s next, which is a completely normal place to start from. Feel free to look around, or join the waitlist so you hear when paid coaching opens.',
    primaryCta: false,
    secondaryNote: '',
  };
}

interface CoachingQuizProps {
  bookingUrl?: string;
  waitlistUrl?: string;
}

export default function CoachingQuiz({ bookingUrl, waitlistUrl }: CoachingQuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [animKey, setAnimKey] = useState(0);

  const isDone = step >= QUESTIONS.length;

  function selectOption(optionIdx: number) {
    const next = [...answers];
    next[step] = optionIdx;
    setAnswers(next);

    const advance =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 0
        : 220;

    window.setTimeout(() => {
      setStep((s) => s + 1);
      setAnimKey((k) => k + 1);
    }, advance);
  }

  function goBack() {
    if (step === 0) return;
    setStep((s) => s - 1);
    setAnimKey((k) => k + 1);
  }

  function reset() {
    setAnswers([]);
    setStep(0);
    setAnimKey((k) => k + 1);
  }

  let result: Result | null = null;
  if (isDone) {
    const situationIdx = answers[0] ?? 0;
    const painIdx = answers[2] ?? 0;
    const readinessIdx = answers[READINESS_INDEX] ?? 0;
    const situationTag = QUESTIONS[0].options[situationIdx]?.tag ?? 'a transition of your own';
    const painTag = QUESTIONS[2].options[painIdx]?.tag ?? 'a lot at once';
    const readinessWeight = QUESTIONS[READINESS_INDEX].options[readinessIdx]?.weight ?? 0;
    result = buildResult(readinessWeight, situationTag, painTag);
  }

  return (
    <div className="card p-6 sm:p-10">
      <span className="eyebrow">A 60-second gut check</span>
      <h2 className="mt-3 text-display-md font-display text-ink-900">
        Is coaching right for you?
      </h2>
      <p className="mt-3 text-ink-600 max-w-xl">
        Five quick questions, no email required — just an honest read on
        whether this is useful for you right now.
      </p>

      {/* progress dots */}
      <div className="mt-8 flex items-center gap-2" aria-hidden="true">
        {QUESTIONS.map((_, idx) => (
          <span
            key={idx}
            className={clsx(
              'h-1.5 rounded-full transition-all duration-300 ease-apple',
              idx === step && !isDone ? 'w-8 bg-teal-400' : 'w-4',
              idx < step || isDone ? 'bg-teal-400' : idx === step ? '' : 'bg-ink-200',
            )}
          />
        ))}
      </div>

      <div key={animKey} className="mt-8 animate-fade-in-up">
        {!isDone ? (
          <div>
            <h3 className="text-lg font-display font-semibold tracking-tight text-ink-900">
              {QUESTIONS[step].prompt}
            </h3>
            <div className="mt-5 grid gap-3">
              {QUESTIONS[step].options.map((opt, idx) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => selectOption(idx)}
                  className={clsx(
                    'w-full text-left px-5 py-4 rounded-2xl border transition-all duration-300 ease-apple',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2',
                    answers[step] === idx
                      ? 'border-teal-400 bg-teal-100/60 text-ink-900'
                      : 'border-ink-200 text-ink-700 hover:border-teal-400 hover:bg-teal-100/30 hover:text-ink-900',
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 0}
                className={clsx(
                  'btn-ghost px-4 py-2 text-sm',
                  step === 0 && 'opacity-0 pointer-events-none',
                )}
              >
                ← Back
              </button>
              <span className="text-xs text-ink-400">
                {step + 1} of {QUESTIONS.length}
              </span>
            </div>
          </div>
        ) : (
          result && (
            <div>
              <h3 className="text-xl font-display font-semibold tracking-tight text-ink-900">
                {result.heading}
              </h3>
              <p className="mt-3 text-ink-600 leading-relaxed max-w-xl">{result.body}</p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                {result.primaryCta && bookingUrl && (
                  <a href="#book" className="btn-primary">
                    Book a session <span aria-hidden="true">↓</span>
                  </a>
                )}
                {waitlistUrl ? (
                  <a
                    href={waitlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Join the waitlist <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  !result.primaryCta && (
                    <span className="text-sm text-ink-400">
                      Waitlist signup opening soon.
                    </span>
                  )
                )}
                <button
                  type="button"
                  onClick={reset}
                  className="text-sm text-ink-500 hover:text-ink-900 underline underline-offset-4"
                >
                  Retake the quiz
                </button>
              </div>

              {result.secondaryNote && (
                <p className="mt-4 text-sm text-ink-400">{result.secondaryNote}</p>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
