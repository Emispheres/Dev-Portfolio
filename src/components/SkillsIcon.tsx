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
    // Conteneur qui prend toute la largeur avec icones espacées et margin top
    <div className="flex flex-row flex-wrap gap-x-32 gap-y-6 justify-between items-start w-full mt-8">
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <div key={skill.label} className="flex flex-col items-center gap-3">
            {/* Icones agrandies: h-16 w-16 au lieu de h-12 w-12 */}
            <Icon className={`text-white h-24 w-24 text-stone-300 transition-colors ${skill.hoverColor}`} />
            <p className="text-sm text-white font-medium text-stone-300">{skill.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsIcon;
