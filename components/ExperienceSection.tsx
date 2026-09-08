'use client';

import { useState } from 'react';
import { experiences } from '@/lib/experience-data';

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id ?? null);

  return (
    <section className="relative min-h-full px-6 md:px-10 lg:px-16 py-12 md:py-16">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="space-y-3">
          <p className="text-xs tracking-[0.28em] uppercase text-violet">Experience</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Development experience
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Roles and outcomes tied to shipped product work.
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((exp) => {
            const open = expandedId === exp.id;
            return (
              <div key={exp.id} className="rounded-2xl space-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setExpandedId(open ? null : exp.id)}
                  className="w-full text-left p-5 md:p-6 hover-lift"
                  aria-expanded={open}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground">{exp.position}</h3>
                      <p className="text-sm text-violet">{exp.company}</p>
                      <p className="text-xs text-muted">{exp.period}</p>
                    </div>
                    <span
                      className={`mt-1 text-muted transition-transform duration-[180ms] ${open ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </div>
                </button>

                {open && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-4 border-t border-border">
                    <p className="pt-4 text-sm leading-relaxed text-muted">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((item) => (
                        <li key={item} className="text-sm text-foreground flex gap-2">
                          <span className="text-violet mt-0.5">–</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted">{exp.technologies.join(' • ')}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
