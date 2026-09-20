import { asset } from '@/lib/utils';

interface ScreenshotGalleryProps {
  images?: string[];
  alt?: string;
}

export default function ScreenshotGallery({
  images,
  alt = 'Project screenshot',
}: ScreenshotGalleryProps) {
  if (!images || images.length === 0) {
    return (
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-2xl border border-dashed border-ink-300 bg-ink-50 flex items-center justify-center text-xs text-ink-400"
          >
            Screenshot placeholder {i + 1}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="my-10 flex flex-col gap-8">
      {images.map((src, idx) => (
        <figure
          key={src}
          className="group rounded-2xl overflow-hidden border border-ink-200 bg-ink-50 shadow-sm"
        >
          <a
            href={asset(src)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${alt} ${idx + 1} full size`}
            className="block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(src)}
              alt={`${alt} ${idx + 1}`}
              className="block w-full h-auto"
              loading="lazy"
            />
          </a>
        </figure>
      ))}
    </div>
  );
}
