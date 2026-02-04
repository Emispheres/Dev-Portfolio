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
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 sm:gap-x-32 sm:gap-y-6 justify-center sm:justify-between items-start w-full mt-2 sm:mt-8">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div 
            key={skill.label} 
            className="flex flex-col items-center gap-2 sm:gap-3 group animate-fadeIn"
            style={{animationDelay: `${0.8 + index * 0.1}s`, animationFillMode: 'both'}}
          >
            {/* Icones: petites sur mobile (h-10 w-10), grandes sur desktop (h-20 w-20) */}
            <Icon className={`text-white h-10 w-10 sm:h-20 sm:w-20 text-stone-300 transition-all duration-300 ${skill.hoverColor} group-hover:scale-110 group-hover:-translate-y-1`} />
            <p className="text-[10px] sm:text-sm text-white font-medium text-stone-300 transition-colors duration-300 group-hover:text-white">{skill.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsIcon;
