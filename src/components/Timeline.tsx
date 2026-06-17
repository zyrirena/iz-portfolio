interface TimelineItem {
  date: string;
  title: string;
  description: string;
  tag?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative border-l border-ink-200 pl-8 space-y-10">
      {items.map((item, idx) => (
        <li key={`${item.date}-${idx}`} className="relative">
          {/* Dot */}
          <span
            className="absolute -left-[34px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-teal-400 shadow-soft"
            aria-hidden="true"
          />
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-teal-600">
              {item.date}
            </span>
            {item.tag && (
              <span className="chip-pink">{item.tag}</span>
            )}
          </div>
          <h3 className="mt-2 text-lg sm:text-xl font-semibold tracking-tight text-ink-900">
            {item.title}
          </h3>
          <p className="mt-1.5 text-ink-600 leading-relaxed">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
