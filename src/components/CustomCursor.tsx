'use client';

import { useEffect, useRef } from 'react';

const HOVER_SELECTOR =
  'a, button, [role="button"], input, textarea, select, .card-hover, label';

/**
 * A soft dot-and-ring cursor that grows over anything clickable.
 * Only activates on devices that actually have a mouse (fine pointer +
 * real hover) and only when the visitor hasn't asked for reduced motion —
 * everywhere else the native cursor is left completely alone.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reduced) return;

    document.body.classList.add('cursor-active');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest(HOVER_SELECTOR)) {
        ring.classList.add('cursor-ring--hover');
      }
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest(HOVER_SELECTOR)) {
        ring.classList.remove('cursor-ring--hover');
      }
    };
    const onLeaveWindow = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };
    const onEnterWindow = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });
    document.addEventListener('mouseleave', onLeaveWindow);
    document.addEventListener('mouseenter', onEnterWindow);

    return () => {
      document.body.classList.remove('cursor-active');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mouseleave', onLeaveWindow);
      document.removeEventListener('mouseenter', onEnterWindow);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
