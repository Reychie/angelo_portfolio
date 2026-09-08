'use client';

import type { Section } from '@/lib/types';
import { site } from '@/lib/site';

interface AboutSectionProps {
  onNavigate?: (section: Section) => void;
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  return (
    <section className="relative min-h-full px-6 md:px-10 lg:px-16 py-16 md:py-20">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-3">
          <p className="text-xs tracking-[0.28em] uppercase text-accent">About</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Building systems that stay readable under pressure
          </h2>
        </div>

        <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted">
          <p>
            I&apos;m {site.name}, a {site.role.toLowerCase()} focused on production web applications —
            interfaces that stay clear, APIs that stay reliable, and real-time features that hold up in use.
          </p>
          <p>
            Recent work centers on operational tools such as attendance monitoring, ticket consoles, and live
            metrics boards. I care about evidence: working demos, readable architecture, and links to the code.
          </p>
          <p>
            Technical skills show up in the projects and experience sections — not as an isolated checklist.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="button"
            onClick={() => onNavigate?.('work')}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-accent text-[#0b0d12] text-sm font-semibold hover-scale"
          >
            View Work
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.('contact')}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-border-strong text-sm font-semibold text-foreground hover:border-accent hover:text-accent interactive-link hover-scale"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}
