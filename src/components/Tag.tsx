import clsx from 'clsx';

type Variant = 'neutral' | 'pink' | 'teal' | 'outline';

interface TagProps {
  label: string;
  variant?: Variant;
  size?: 'sm' | 'md';
  className?: string;
}

export default function Tag({ label, variant = 'neutral', size = 'sm', className }: TagProps) {
  const base = 'inline-flex items-center font-medium rounded-full transition-colors';
  const sizes = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };
  const variants = {
    neutral: 'bg-ink-100 text-ink-700',
    pink: 'bg-pink-100 text-pink-700',
    teal: 'bg-teal-100 text-teal-700',
    outline: 'bg-transparent border border-ink-200 text-ink-700',
  };
  return (
    <span className={clsx(base, sizes[size], variants[variant], className)}>
      {label}
    </span>
  );
}

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const lower = status.toLowerCase();
  const containerStyle =
    lower.includes('live') ? 'bg-teal-100 text-teal-700' :
    lower.includes('research') ? 'bg-pink-100 text-pink-700' :
    lower.includes('archived') ? 'bg-ink-100 text-ink-600' :
    'bg-white border border-ink-200 text-ink-700';

  const dotColor =
    lower.includes('live') ? 'bg-teal-500' :
    lower.includes('development') ? 'bg-pink-400' :
    lower.includes('prototype') ? 'bg-pink-400' :
    lower.includes('research') ? 'bg-pink-500' :
    'bg-ink-400';

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2 px-2.5 py-1 text-xs font-medium rounded-full',
        containerStyle,
        className,
      )}
    >
      <span className={clsx('w-1.5 h-1.5 rounded-full', dotColor)} />
      {status}
    </span>
  );
}
