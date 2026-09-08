import type { SkillItemData } from '@/lib/skills-data';
import { SkillIcon } from '@/components/icons/TechIcons';

export default function SkillItem({ skill }: { skill: SkillItemData }) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-foreground">
      <span className="text-muted">
        <SkillIcon name={skill.name} icon={skill.icon} />
      </span>
      <span>{skill.name}</span>
    </li>
  );
}
