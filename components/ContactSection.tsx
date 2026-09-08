'use client';

import { site } from '@/lib/site';

export default function ContactSection() {
  return (
    <section className="relative min-h-full px-6 md:px-10 lg:px-16 py-16 md:py-20">
      <div className="max-w-2xl space-y-8">
        <div className="space-y-3">
          <p className="text-xs tracking-[0.28em] uppercase text-accent">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Let&apos;s talk about what you&apos;re building
          </h2>
          <p className="text-base text-muted leading-relaxed">
            For roles, collaborations, or technical discussions — reach out directly.
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-border bg-surface p-6">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-1">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="text-lg text-foreground hover:text-accent interactive-link"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-1">Location</p>
            <p className="text-foreground">{site.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-full border border-border-strong text-sm font-semibold text-foreground hover:border-accent hover:text-accent interactive-link hover-scale"
          >
            GitHub ↗
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-full border border-border-strong text-sm font-semibold text-foreground hover:border-accent hover:text-accent interactive-link hover-scale"
          >
            LinkedIn ↗
          </a>
          <a
            href={site.resumePath}
            download
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-accent text-[#0b0d12] text-sm font-semibold hover-scale"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}
