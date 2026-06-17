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
    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, idx) => (
        <figure
          key={src}
          className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-ink-200 bg-ink-50"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(src)}
            alt={`${alt} ${idx + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-apple group-hover:scale-105"
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  );
}
