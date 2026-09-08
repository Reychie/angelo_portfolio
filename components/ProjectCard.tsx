import type { Project } from '@/lib/projects-data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface hover-lift">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-[#0a0d14]">
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
          <a href={project.caseStudyUrl} className="text-foreground hover:text-accent interactive-link">
            Case Study
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent interactive-link"
          >
            GitHub ↗
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent interactive-link"
            >
              Live Demo ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
