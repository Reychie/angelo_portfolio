import { skillCategories } from '@/lib/skills-data';
import SkillCategory from '@/components/skills/SkillCategory';

export default function SkillsSection() {
  return (
    <section className="relative min-h-full px-6 md:px-10 lg:px-16 py-12 md:py-16">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs tracking-[0.28em] uppercase text-violet">Skills</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Technical Toolkit
          </h2>
          <p className="text-base text-muted leading-relaxed">
            A structured view of the languages, frameworks, and tools used to ship production work —
            demonstrated in Projects and Experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
          {skillCategories.map((category) => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
