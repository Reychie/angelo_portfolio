'use client';

import { useEffect, useRef, useState } from 'react';

interface CustomCursorProps {
  showCursor?: boolean;
}

export default function CustomCursor({ showCursor = true }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [boosted, setBoosted] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);
  const boostTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!showCursor) return;

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setEnabled(finePointer.matches && !reducedMotion.matches);
    sync();
    finePointer.addEventListener('change', sync);
    reducedMotion.addEventListener('change', sync);
    return () => {
      finePointer.removeEventListener('change', sync);
      reducedMotion.removeEventListener('change', sync);
    };
  }, [showCursor]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      pos.current.x = event.clientX;
      pos.current.y = event.clientY;
      if (frame.current == null) {
        frame.current = window.requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
            cursorRef.current.style.opacity = '1';
          }
          frame.current = null;
        });
      }
    };

    const onClick = () => {
      setBoosted(true);
      if (boostTimer.current != null) window.clearTimeout(boostTimer.current);
      boostTimer.current = window.setTimeout(() => setBoosted(false), 520);
    };

    const onLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
    };

    document.documentElement.classList.add('has-custom-cursor');
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('click', onClick);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      document.removeEventListener('mouseleave', onLeave);
      if (frame.current != null) cancelAnimationFrame(frame.current);
      if (boostTimer.current != null) window.clearTimeout(boostTimer.current);
    };
  }, [enabled]);

  if (!showCursor || !enabled) return null;

  return (
    <div ref={cursorRef} className={`rocket-cursor ${boosted ? 'rocket-cursor-boosted' : ''}`} aria-hidden="true">
      <span className="rocket-cursor-flame" />
      <span className="rocket-cursor-particle rocket-cursor-particle-one" />
      <span className="rocket-cursor-particle rocket-cursor-particle-two" />
      <svg viewBox="0 0 32 32" className="rocket-cursor-icon" role="presentation">
        <path d="M21.8 3.6c-5.1.7-9.1 3.6-11.7 8.1l-3.8.9-2.2 3.7 5.3.2 3.8 3.8.2 5.3 3.7-2.2.9-3.8c4.5-2.6 7.4-6.6 8.1-11.7.3-2 .2-3.1-.3-4.3-.9-.5-2.1-.6-4-.1Z" />
        <circle cx="20.2" cy="10.8" r="2.2" />
        <path d="m10.5 21.5-2.7 2.7M7.8 24.2l-2.2.2.2-2.2" />
      </svg>
    </div>
  );
}
