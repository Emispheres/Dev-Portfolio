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
    <div className="grid w-full grid-cols-2 items-start gap-x-4 gap-y-2 px-4 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-6 sm:px-8 md:px-12 lg:gap-x-12 xl:gap-x-16 2xl:mt-16 mt-2 lg:mt-8">
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
