'use client';

import { experiences, technologyIcons } from '@/lib/experience-data';
import { SkillIcon } from '@/components/icons/TechIcons';
import type { SkillIconKey } from '@/lib/skills-data';

export default function ExperienceSection() {
  const experience = experiences[0];

  if (!experience) return null;

  return (
    <section className="relative min-h-full px-6 md:px-10 lg:px-16 py-12 md:py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="experience-heading max-w-2xl">
          <p className="text-xs tracking-[0.28em] uppercase text-violet">Experience</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            A practical path through production work
          </h2>
          <p className="text-base text-muted leading-relaxed">
            One focused timeline of the systems, teams, and technologies behind my recent work.
          </p>
        </div>

        <div className="experience-timeline">
          <div className="experience-timeline-rail" aria-hidden="true">
            <span className="experience-timeline-dot" />
          </div>
          <article className="experience-entry space-card rounded-2xl p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-violet">{experience.period}</p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">{experience.position}</h3>
                <p className="mt-1 text-sm text-muted">{experience.company} · Pontiac, Michigan, USA</p>
              </div>
              <span className="experience-status">Recent role</span>
            </div>

            <p className="mt-6 text-sm md:text-base leading-relaxed text-muted">{experience.description}</p>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {experience.achievements.map((item) => (
                <div key={item} className="experience-highlight rounded-xl border border-border p-4 text-sm leading-relaxed text-foreground">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-5">
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted">Technology stack</p>
              <ul className="mt-3 flex flex-wrap gap-2.5" aria-label="Technologies used">
                {experience.technologies.map((technology) => {
                  const icon = technologyIcons[technology as keyof typeof technologyIcons] as SkillIconKey;
                  return (
                    <li key={technology} className="skill-chip">
                      <span className="skill-chip-icon" aria-hidden="true">
                        <SkillIcon name={technology} icon={icon} />
                      </span>
                      <span>{technology}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
