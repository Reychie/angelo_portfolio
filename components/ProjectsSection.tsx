import { projects } from '@/lib/projects-data';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsSection() {
  return (
    <section className="relative min-h-full px-6 md:px-10 lg:px-16 py-16 md:py-20">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs tracking-[0.28em] uppercase text-accent">Work</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Selected projects
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Evidence of shipped systems — role, stack, and links first. Skills are shown through what was built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} id={`case-${project.id}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
