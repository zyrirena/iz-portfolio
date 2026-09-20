'use client';

import { useEffect, useRef } from 'react';
import { asset } from '@/lib/utils';

interface CoverVideoProps {
  /** Path to an .mp4 in /public (e.g. /videos/my-project/cover.mp4). A .webm with the same name is used first when present. */
  src: string;
  /** Still image shown before playback, and for reduced-motion users */
  poster?: string;
  label: string;
  className?: string;
}

/**
 * Silent, looping, autoplaying cover video. Falls back to the poster image
 * (no playback) when the visitor prefers reduced motion.
 */
export default function CoverVideo({ src, poster, label, className = '' }: CoverVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      if (query.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => {});
      }
    };
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  return (
    <video
      ref={ref}
      className={`w-full h-full object-contain bg-[#060a0e] ${className}`}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster ? asset(poster) : undefined}
      aria-label={label}
    >
      <source src={asset(src.replace(/\.mp4$/, '.webm'))} type="video/webm" />
      <source src={asset(src)} type="video/mp4" />
    </video>
  );
}
