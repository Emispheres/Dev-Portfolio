import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <>
      {/* Section Formation et Expérience */}
      <Section className="bg-gray-100" sectionId={SectionId.Resume} maxWidth="max-w-[1260px]">
        <div className="flex flex-col gap-y-8">
          {/* Grille avec 2 colonnes : Formations et Expérience côte à côte */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Formations */}
            <div>
              <ResumeSection title="Formations">
                {education.map((item, index) => (
                  <TimelineItem item={item} key={`${item.title}-${index}`} />
                ))}
              </ResumeSection>
            </div>
            
            {/* Expérience */}
            <div>
              <ResumeSection title="Expérience">
                {experience.map((item, index) => (
                  <TimelineItem item={item} key={`${item.title}-${index}`} />
                ))}
              </ResumeSection>
            </div>
          </div>
        </div>
      </Section>

      {/* Section Compétences séparée */}
      <Section className="bg-white" sectionId={SectionId.Skills} >
        <ResumeSection title="Compétences">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </Section>
    </>
  );
});

Resume.displayName = 'Resume';
export default Resume;
