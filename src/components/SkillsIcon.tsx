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
    <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 sm:gap-x-16 lg:gap-x-24 xl:gap-x-32 sm:gap-y-6 justify-center 2xl:justify-between items-start w-full mt-2 lg:mt-8 2xl:mt-16 px-4 sm:px-12 md:px-24 2xl:px-0">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div 
            key={skill.label} 
            className="flex flex-col items-center gap-1 sm:gap-2 2xl:gap-3 group animate-fadeIn"
            style={{animationDelay: `${0.8 + index * 0.1}s`, animationFillMode: 'both'}}
          >
            {/* Icones: petites sur mobile (h-10 w-10), grandes sur desktop (h-20 w-20) */}
            <Icon className={`text-white h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12 2xl:h-20 2xl:w-20 text-stone-300 transition-all duration-300 ${skill.hoverColor} group-hover:scale-110 group-hover:-translate-y-1`} />
            <p className="text-[10px] md:text-sm text-white font-medium text-stone-300 transition-colors duration-300 group-hover:text-white">{skill.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsIcon;
