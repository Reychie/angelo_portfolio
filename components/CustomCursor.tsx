'use client';

import { useEffect, useRef } from 'react';

interface CustomCursorProps {
  showCursor: boolean;
}

export default function CustomCursor({ showCursor }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBlurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }

      if (cursorBlurRef.current) {
        cursorBlurRef.current.style.left = e.clientX - 20 + 'px';
        cursorBlurRef.current.style.top = e.clientY - 20 + 'px';
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
      if (cursorBlurRef.current) cursorBlurRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
      if (cursorBlurRef.current) cursorBlurRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!showCursor) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 border-2 border-primary dark:border-primary-light rounded-full pointer-events-none z-50 transition-opacity duration-200 opacity-0"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={cursorBlurRef}
        className="fixed w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary-light/20 dark:to-accent-light/20 rounded-full blur-lg pointer-events-none z-40 transition-opacity duration-200 opacity-0"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
