import {FC, memo} from 'react';
import {AcademicCapIcon, BriefcaseIcon, BoltIcon} from '@heroicons/react/24/solid';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <>
      {/* Section Compétences séparée */}
      <Section className="bg-gray-100" sectionId={SectionId.Skills} maxWidth="max-w-[1260px]"> 
        <ResumeSection title="Compétences" icon={BoltIcon}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </Section>

      {/* Section Formation et Expérience */}
      <Section className="bg-white" sectionId={SectionId.Resume} maxWidth="max-w-[1260px]">
        <div className="flex flex-col gap-y-8">
          {/* Grille avec 2 colonnes : Formations et Expérience côte à côte */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
            {/* Formations */}
            <div>
              <ResumeSection title="Formations" icon={AcademicCapIcon}>
                {education.map((item, index) => (
                  <TimelineItem item={item} key={`${item.title}-${index}`} />
                ))}
              </ResumeSection>
            </div>

            {/* Expérience */}
            <div>
              <ResumeSection title="Expériences" icon={BriefcaseIcon}>
                {experience.map((item, index) => (
                  <TimelineItem item={item} key={`${item.title}-${index}`} />
                ))}
              </ResumeSection>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
});

Resume.displayName = 'Resume';
export default Resume;
