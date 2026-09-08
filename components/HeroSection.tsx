'use client';

import type { Section } from '@/lib/types';
import { site } from '@/lib/site';

interface HeroSectionProps {
  onNavigate?: (section: Section) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-full flex items-center px-6 md:px-10 lg:px-16 py-16 md:py-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="max-w-xl lg:max-w-2xl space-y-7">
          <p className="text-xs tracking-[0.28em] uppercase text-accent">Developer in Orbit</p>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              {site.name}
            </h1>
            <p className="text-lg md:text-xl text-muted">{site.role}</p>
          </div>

          <p className="text-base md:text-lg leading-relaxed text-muted max-w-lg">{site.tagline}</p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => onNavigate?.('work')}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-[#0b0d12] text-sm font-semibold hover-scale"
            >
              View Projects
            </button>
            <a
              href={site.resumePath}
              download
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border-strong text-sm font-semibold text-foreground hover:border-accent hover:text-accent interactive-link hover-scale"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground interactive-link"
            >
              GitHub ↗
            </a>
            <span className="text-border-strong">·</span>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground interactive-link"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
