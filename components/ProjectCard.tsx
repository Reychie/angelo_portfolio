'use client';

import { useState } from 'react';
import type { Project } from '@/lib/projects-data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <article id={`case-${project.id}`} className="group overflow-hidden rounded-2xl space-card hover-lift">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-[#070711]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover object-top transition-transform duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-5 md:p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-1">Role</p>
          <p className="text-sm text-foreground">{project.role}</p>
        </div>

        <p className="text-sm text-muted">{project.technologies.join(' • ')}</p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-sm">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="text-foreground hover:text-violet interactive-link"
          >
            {open ? 'Hide Case Study' : 'Case Study'}
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-violet interactive-link"
          >
            GitHub ↗
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-violet interactive-link"
            >
              Live Demo ↗
            </a>
          ) : null}
        </div>

        {open && (
          <div className="pt-3 border-t border-border space-y-3">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-1">Problem</p>
              <p className="text-sm text-foreground leading-relaxed">{project.caseStudy.problem}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-1">Approach</p>
              <p className="text-sm text-foreground leading-relaxed">{project.caseStudy.approach}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-1">Outcome</p>
              <p className="text-sm text-foreground leading-relaxed">{project.caseStudy.outcome}</p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
