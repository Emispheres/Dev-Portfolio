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
    <div ref={ref} className={`flex items-stretch gap-24 mb-4  ${animationClass} ${iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Icône en dehors de la boite */}
      <div className="flex items-center justify-center">
        {Icon && <Icon className={`h-32 w-32 flex-shrink-0 hover:animate-bounce ${iconColor}`} />}
      </div>
      {/* Boite blanche du contenu */}
      <div className="flex flex-col bg-white rounded-xl p-8 shadow-x flex-1 shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out">
        {/* Titre du groupe */}
        <span className={`text-start text-xl font-bold ${iconColor}`} style={{fontFamily: '"Montserrat", Arial, sans-serif'}} >{name}</span>
        
        {/* Description du groupe */}
        <div className="text-medium text-neutral-700 max-w-none my-4 ">{description}</div>
        
        {/* Grille : 1 colonne mobile, 2 colonnes desktop */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 text-medium ">
          {skills.map((skill, index) => (
            <Skill key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

// Composant d'une compétence individuelle avec notation en étoiles
export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, level} = skill;
  
  // Convertir le niveau (1-10) en nombre d'étoiles (0.5-5)
  const fillAmount = level / 2;
  
  // ID unique pour les gradients SVG (évite les conflits entre compétences)
  const skillId = name.replace(/\s+/g, '-').toLowerCase();
  
  return (
    <div className="flex flex-col gap-2">
      {/* Nom + Étoiles alignés horizontalement */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold">{name}</span>
        
        {/* Affichage des 5 étoiles avec remplissage progressif */}
        <div className="flex gap-0 -space-x-1">
          {[...Array(5)].map((_, i) => {
            // Calculer le pourcentage de remplissage pour cette étoile (0-100%)
            const fillPercentage = Math.min(Math.max(fillAmount - i, 0), 1) * 100;
            const gradId = `grad-${skillId}-${i}`;
            
            return (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" className="flex-shrink-0">
                <defs>
                  <linearGradient id={gradId} x1="0%" x2="100%">
                    <stop offset={`${fillPercentage}%`} stopColor="#f59e0b" />
                    <stop offset={`${fillPercentage}%`} stopColor="#e5e7eb" />
                  </linearGradient>
                </defs>
                <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" fill={`url(#${gradId})`} />
              </svg>
            );
          })}
        </div>
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
//<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={`url(#${gradId})`} stroke="#f59e0b" strokeWidth="2" />