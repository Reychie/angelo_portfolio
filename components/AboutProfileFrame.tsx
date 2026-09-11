'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';

const DRAG_THRESHOLD = 5;

export default function AboutProfileFrame() {
  const [revealed, setRevealed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const draggingRef = useRef(false);
  const originRef = useRef<{ x: number; y: number } | null>(null);

  const resetReveal = useCallback(() => {
    draggingRef.current = false;
    originRef.current = null;
    setRevealed(false);
  }, []);

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    originRef.current = { x: event.clientX, y: event.clientY };
    draggingRef.current = false;
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' || !originRef.current) return;
    if ((event.buttons & 1) === 0) {
      resetReveal();
      return;
    }

    const dx = event.clientX - originRef.current.x;
    const dy = event.clientY - originRef.current.y;
    if (!draggingRef.current && Math.hypot(dx, dy) >= DRAG_THRESHOLD) {
      draggingRef.current = true;
      setRevealed(true);
    }
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    resetReveal();
  }

  return (
    <div className="about-profile-wrap">
      <div
        className={`about-profile-frame${revealed ? ' about-profile-frame-revealed' : ''}`}
        role="img"
        aria-label="Portrait of Angelo Reychie Alejo. Drag inside the frame for an alternate view."
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={resetReveal}
        onLostPointerCapture={resetReveal}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          resetReveal();
        }}
        onContextMenu={(event) => event.preventDefault()}
        onDragStart={(event) => event.preventDefault()}
      >
        <div className="about-profile-orbit about-profile-orbit-one" aria-hidden="true" />
        <div className="about-profile-orbit about-profile-orbit-two" aria-hidden="true" />

        <div className="about-profile-image-wrap">
          <Image
            src="/images/alejo_profile.jpg"
            alt="Angelo Reychie Alejo"
            fill
            sizes="(max-width: 899px) 14.5rem, 15rem"
            className={`about-profile-image about-profile-image-primary${revealed ? ' is-hidden' : ''}`}
            draggable={false}
            priority
          />
          <Image
            src="/images/kevin_profile.jpg"
            alt=""
            fill
            sizes="(max-width: 899px) 14.5rem, 15rem"
            className={`about-profile-image about-profile-image-alt${revealed ? ' is-visible' : ''}`}
            draggable={false}
            aria-hidden="true"
          />
          <div className="about-profile-scan" aria-hidden="true" />
        </div>

        <div
          className={`about-profile-corner${isFocused || revealed ? ' about-profile-corner-active' : ''}`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
