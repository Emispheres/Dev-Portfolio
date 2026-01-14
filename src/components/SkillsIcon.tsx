import {FC} from 'react';

interface SkillIconItem {
  icon: React.ComponentType<{className?: string}>;
  label: string;
  hoverColor: string;
}

interface SkillsIconProps {
  skills: SkillIconItem[];
}

const SkillsIcon: FC<SkillsIconProps> = ({skills}) => {
  return (
    <div className="flex flex-row flex-wrap gap-6 justify-center items-start">
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <div key={skill.label} className="flex flex-col items-center gap-3">
            <Icon className={`h-12 w-12 text-stone-300 transition-colors ${skill.hoverColor}`} />
            <p className="text-sm font-medium text-stone-300">{skill.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsIcon;
