import type { SkillCategoryData } from '@/lib/skills-data';
import { CategoryIcon } from '@/components/icons/TechIcons';
import SkillItem from '@/components/skills/SkillItem';

export default function SkillCategory({ category }: { category: SkillCategoryData }) {
  return (
    <article className="space-card rounded-2xl p-5 md:p-6 hover-lift">
      <div className="flex flex-col items-center text-center gap-3 mb-5">
        <span className="w-10 h-10 inline-flex items-center justify-center rounded-xl border border-border text-violet bg-accent-soft">
          <CategoryIcon kind={category.icon} />
        </span>
        <h3 className="text-base font-semibold text-foreground">{category.title}</h3>
      </div>
      <ul className="space-y-2.5 text-left">
        {category.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </ul>
    </article>
  );
}
