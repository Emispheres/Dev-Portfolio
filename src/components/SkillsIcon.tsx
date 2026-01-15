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
    <div className="flex flex-row flex-wrap gap-x-4 gap-y-4 sm:gap-x-32 sm:gap-y-6 justify-center sm:justify-between items-start w-full mt-8">
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <div key={skill.label} className="flex flex-col items-center gap-2 sm:gap-3">
            {/* Icones: petites sur mobile (h-12 w-12), grandes sur desktop (h-24 w-24) */}
            <Icon className={`text-white h-12 w-12 sm:h-20 sm:w-20 text-stone-300 transition-colors ${skill.hoverColor}`} />
            <p className="text-xs sm:text-sm text-white font-medium text-stone-300">{skill.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsIcon;
