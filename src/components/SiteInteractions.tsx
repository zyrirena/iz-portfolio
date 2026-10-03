'use client';

import { useEffect } from 'react';

const MAGNETIC_SELECTOR = '.btn-primary, .btn-secondary, .btn-accent, .btn-ghost';
const TILT_SELECTOR = '.card-hover';

/**
 * Site-wide pointer polish: a gentle magnetic pull on buttons, a subtle
 * mouse-parallax on hero blobs, and a light tilt/lift on hover cards.
 * Implemented with event delegation so no individual page has to opt in —
 * any element already using `.btn-*` / `.hero-blob` / `.card-hover` gets it
 * automatically. Fully inert on touch devices and under reduced motion.
 *
 * Everything is driven off a single `mousemove` listener and `e.target`
 * (always the exact element under the pointer) rather than paired
 * mouseover/mouseout listeners, which fire unreliably across nested
 * children and make "did the pointer really leave this element" surprisingly
 * hard to get right.
 */
export default function SiteInteractions() {
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reduced) return;

    let magneticEl: HTMLElement | null = null;
    let tiltEl: HTMLElement | null = null;

    const onMove = (e: MouseEvent) => {
      const target = e.target as Element | null;

      // Magnetic buttons: nudge toward the cursor, gently.
      const newMagnet = target?.closest<HTMLElement>(MAGNETIC_SELECTOR) ?? null;
      if (newMagnet !== magneticEl) {
        if (magneticEl) magneticEl.style.transform = '';
        magneticEl = newMagnet;
      }
      if (magneticEl) {
        const r = magneticEl.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.25;
        const y = (e.clientY - r.top - r.height / 2) * 0.35;
        magneticEl.style.transform = `translate(${x}px, ${y}px)`;
      }

      // Card tilt: a light 3D lean toward the pointer.
      const newTilt = target?.closest<HTMLElement>(TILT_SELECTOR) ?? null;
      if (newTilt !== tiltEl) {
        if (tiltEl) tiltEl.style.transform = '';
        tiltEl = newTilt;
      }
      if (tiltEl) {
        const r = tiltEl.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        tiltEl.style.transform = `perspective(900px) rotateX(${(-py * 3.5).toFixed(2)}deg) rotateY(${(px * 3.5).toFixed(2)}deg) translateY(-4px)`;
      }

      // Hero blob parallax, relative to the viewport.
      const blobs = document.querySelectorAll<HTMLElement>('.hero-blob');
      if (blobs.length) {
        const bx = (e.clientX / window.innerWidth - 0.5) * 30;
        const by = (e.clientY / window.innerHeight - 0.5) * 30;
        blobs.forEach((blob) => {
          blob.style.transform = `translate(${bx.toFixed(1)}px, ${by.toFixed(1)}px)`;
        });
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return null;
}
