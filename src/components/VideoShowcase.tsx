import { asset } from '@/lib/utils';

interface VideoShowcaseProps {
  src?: string;
  poster?: string;
  caption?: string;
  /** Optional YouTube/Vimeo embed URL — if set, an iframe is used instead. */
  embedUrl?: string;
}

/**
 * Renders a self-hosted video (from /public/videos), an embedded video,
 * or a friendly placeholder when no source is provided.
 */
export default function VideoShowcase({
  src,
  poster,
  caption,
  embedUrl,
}: VideoShowcaseProps) {
  return (
    <figure className="my-10">
      <div className="relative aspect-video rounded-3xl overflow-hidden border border-ink-200 bg-gradient-to-br from-pink-100 via-white to-teal-100 shadow-card">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={caption || 'Video demo'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        ) : src ? (
          <video
            controls
            preload="metadata"
            poster={poster ? asset(poster) : undefined}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={asset(src)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-ink-600">
            <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-soft inline-flex items-center justify-center">
              <svg
                className="w-7 h-7 text-teal-500 ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-sm font-medium">Demo video placeholder</p>
            <p className="text-xs text-ink-500">
              Add an .mp4 to <code className="bg-white/70 px-1 py-0.5 rounded">/public/videos</code>
            </p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-ink-500 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
