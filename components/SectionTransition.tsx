'use client';

import { ReactNode } from 'react';

interface SectionTransitionProps {
  sectionKey: string;
  children: ReactNode;
}

export default function SectionTransition({ sectionKey, children }: SectionTransitionProps) {
  return (
    <div key={sectionKey} className="h-full w-full overflow-y-auto animate-section-enter">
      {children}
    </div>
  );
}
