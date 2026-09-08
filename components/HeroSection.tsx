'use client';

import type { Section } from '@/lib/types';
import { site } from '@/lib/site';
import Button from '@/components/ui/Button';
import SocialButton from '@/components/ui/SocialButton';

interface HeroSectionProps {
  onNavigate?: (section: Section) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-full flex items-center px-6 md:px-10 lg:px-16 py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto">
        <div className="max-w-xl lg:max-w-2xl space-y-7">
          <p className="hero-badge">
            <span className="hero-badge-dot" />
            Developer in Orbit
          </p>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              {site.name}
            </h1>
            <p className="text-lg md:text-xl">
              <span className="text-gradient">{site.role}</span>
            </p>
          </div>

          <p className="text-base md:text-lg leading-relaxed text-muted max-w-lg">{site.tagline}</p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button onClick={() => onNavigate?.('projects')}>View Projects</Button>
            <Button href={site.resumePath} download variant="ghost">
              Download Resume
            </Button>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <SocialButton platform="github" labeled />
            <SocialButton platform="linkedin" labeled />
          </div>
        </div>
      </div>
    </section>
  );
}
