import type { SkillCategoryData } from '@/lib/skills-data';
import { CategoryIcon } from '@/components/icons/TechIcons';
import SkillItem from '@/components/skills/SkillItem';

export default function SkillCategory({ category }: { category: SkillCategoryData }) {
  return (
    <article className="space-card rounded-2xl p-5 md:p-6 hover-lift">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-9 h-9 inline-flex items-center justify-center rounded-xl border border-border text-violet bg-accent-soft">
          <CategoryIcon kind={category.icon} />
        </span>
        <h3 className="text-sm font-semibold tracking-[0.14em] uppercase text-violet">{category.title}</h3>
      </div>
      <ul className={`flex gap-2.5 ${category.id === 'frontend' || category.id === 'backend' ? 'grid grid-cols-2 items-start skill-category-compact' : 'flex-wrap'}`}>
        {category.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </ul>
    </article>
  );
}
