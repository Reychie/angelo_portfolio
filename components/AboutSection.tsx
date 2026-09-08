'use client';

import type { Section } from '@/lib/types';
import { site } from '@/lib/site';
import Button from '@/components/ui/Button';

interface AboutSectionProps {
  onNavigate?: (section: Section) => void;
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  return (
    <section className="relative min-h-full px-6 md:px-10 lg:px-16 py-12 md:py-16">
      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <div className="space-y-3">
          <p className="text-xs tracking-[0.28em] uppercase text-violet">About</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Building systems that stay readable under pressure
          </h2>
        </div>

        <div className="space-card rounded-2xl p-6 md:p-8 space-y-5 text-base md:text-lg leading-relaxed text-muted">
          <p>
            I&apos;m {site.name}, a {site.role.toLowerCase()} focused on production web applications —
            interfaces that stay clear, APIs that stay reliable, and real-time features that hold up in use.
          </p>
          <p>
            Recent work centers on operational tools such as attendance monitoring, ticket consoles, and live
            metrics boards. I care about evidence: working demos, readable architecture, and links to the code.
          </p>
          <p>
            The Skills section maps the stack; Projects and Experience show how those technologies were used.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button onClick={() => onNavigate?.('projects')}>View Projects</Button>
          <Button onClick={() => onNavigate?.('skills')} variant="ghost">
            View Skills
          </Button>
        </div>
      </div>
    </section>
  );
}
