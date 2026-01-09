import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

/**
 * SkillGroup : Affiche un groupe de compétences avec un titre
 * Par exemple : "Langages de programmation" avec React, TypeScript, etc.
 */
export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  // Récupère le nom du groupe et la liste des compétences
  const {name, skills, description} = skillGroup;
  
  return (
    <div className="flex flex-col bg-white rounded-xl mb-4 p-8 shadow-x">
      {/* Titre du groupe en gras et centré */}
      <span className="text-start text-lg font-bold ">{name}</span>

      <span className="text-sm text-neutral-700 prose prose-sm max-w-none pt-2">{description}</span>

      {/* Affiche chaque compétence avec une barre de niveau */}
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

/**
 * Skill : Affiche une compétence individuelle avec une barre de progression
 * Par exemple : "React" avec une barre remplie à 90%
 */
export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  // Récupère le nom, le niveau et le max (défaut 10)
  const {name, level, max = 10} = skill;
  
  // Calcule le pourcentage pour la barre (ex: 9/10 = 90%)
  // useMemo optimise le calcul pour ne pas le refaire à chaque rendu
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col">
      {/* Nom de la compétence */}
      <span className="ml-2 text-sm font-medium">{name}</span>
      
      {/* Conteneur de la barre de progression */}
      <div className="h-6 w-full overflow-hidden rounded-full bg-neutral-300 shadow-inner">
        {/* Barre remplie avec gradient bleu-violet, remplissage dépend du percentage */}
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out shadow-sm"
          style={{width: `${percentage}%`}}
        />
        
        {/* Affiche le ratio (ex: 9/10) */}
        <span className="absolute right-2 top-1 text-xs font-semibold text-gray-700">
          {level}/{max}
        </span>
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
