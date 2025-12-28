import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="rounded-lg bg-neutral-700/50 border border-neutral-600 p-6 transition-all hover:border-cyan-500 hover:bg-neutral-700">
      <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-cyan-500/30">{name}</h3>
      <div className="flex flex-col gap-y-4">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-200">{name}</span>
        <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
          {level}/{max}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-600 shadow-inner">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000 ease-out shadow-lg shadow-cyan-500/50"
          style={{width: `${percentage}%`}}
        />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
