import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

// Conteneur principal d'un groupe de compétences (ex: "Langues", "Frontend", etc.)
export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills, description, Icon, iconPosition = 'left', iconColor} = skillGroup;
  const { ref, isVisible } = useIntersectionObserver();
  
  // Choisir l'animation selon la position de l'icône
  const animationClass = isVisible 
    ? (iconPosition === 'right' ? 'animate-slideFromLeft' : 'animate-slideFromRight')
    : 'opacity-0';
  
  return (
    <div ref={ref} className={`flex items-stretch gap-4 md:gap-6 mb-3 ${animationClass} ${iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Icône en dehors de la boite */}
      <div className="flex items-center justify-center flex-shrink-0">
        {Icon && <Icon className={`h-16 w-16 md:h-20 md:w-20 flex-shrink-0 hover:animate-bounce ${iconColor}`} />}
      </div>
      {/* Boite blanche du contenu */}
      <div className="flex flex-col bg-white rounded-md p-4 md:p-6 shadow-sm flex-1 border border-gray-100  hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
        {/* Titre du groupe */}
        <span className={`text-start text-base md:text-lg font-bold ${iconColor}`} style={{fontFamily: '"Montserrat", Arial, sans-serif'}}>{name}</span>
        
        {/* Description du groupe */}
        <div className="text-sm text-neutral-600 max-w-none mt-1 mb-3">{description}</div>
        
        {/* Grille : 2 colonnes mobile, 3 colonnes desktop */}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 text-sm">
          {skills.map((skill, index) => (
            <Skill key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

// Composant d'une compétence individuelle affichée sous forme de badge (logo officiel + nom)
export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, logo} = skill;

  return (
    <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-sm">
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={`Logo ${name}`} loading="lazy" className="h-5 w-5 flex-shrink-0 object-contain" />
      ) : (
        <span aria-hidden="true" className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
      )}
      <span className="text-xs md:text-sm font-medium text-neutral-800">{name}</span>
    </div>
  );
});

Skill.displayName = 'Skill';