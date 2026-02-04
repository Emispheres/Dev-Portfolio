import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import {useScrollAnimation} from '../../hooks/useIntersectionObserver';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {description, aboutItems, softSkills} = aboutData;
  
  // Animations au scroll pour différentes parties
  const {ref: titleRef, animationClass: titleAnim} = useScrollAnimation('fadeIn', 100);
  const {ref: descRef, animationClass: descAnim} = useScrollAnimation('fadeIn', 200);
  const {ref: infoRef, animationClass: infoAnim} = useScrollAnimation('fadeIn', 300);
  const {ref: skillsRef, animationClass: skillsAnim} = useScrollAnimation('fadeIn', 400);
  
  return (
    <Section className="bg-white" sectionId={SectionId.About} maxWidth="max-w-[900px]">
      {/* Wrapper pour le contenu centré */}
      <div className="flex flex-col gap-y-10">
        {/* Titre */}
        <h2 ref={titleRef} className={`text-4xl font-bold text-center text-black ${titleAnim}`} style={{fontFamily: '"Noto SD 500", Arial, sans-serif'}}>
          À propos de moi
        </h2>
        
        {/* Description principale */}
        <div ref={descRef} className={`flex flex-col gap-y-6 ${descAnim}`}>
          <p className="prose prose-sm text-black text-justify sm:prose-base whitespace-pre-wrap mx-auto max-w-3xl" 
            style={{fontFamily: '"Roboto", sans-serif'}}>
            {description}
          </p>
        </div>

        {/* Infos personnelles */}
        {aboutItems && aboutItems.length > 0 && (
          <div ref={infoRef} className={`${infoAnim}`}>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 justify-items-center" style={{fontFamily: 'Roboto, sans-serif'}}>
              {aboutItems.map(({label, text, Icon}, idx) => (
                <li className="flex items-center gap-x-2 transition-all duration-300 hover:translate-x-1" key={idx}>
                  {Icon && <Icon className="h-5 w-5 text-black transition-colors duration-300 hover:text-orange-600" />}
                  <span className="text-sm font-bold text-black">{label}:</span>
                  <span className="text-sm text-black">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Section Savoir-faire */}
        {softSkills && softSkills.length > 0 && (
          <div ref={skillsRef} className={`grid grid-cols-2 sm:grid-cols-4 gap-4 ${skillsAnim}`}>
            {softSkills.map((skill, idx) => (
              <div key={idx} className="bg-gray-100 border border-gray-300 rounded-md py-4 text-center cursor-default">
                <span className="text-sm font-semibold text-black" style={{fontFamily: 'Noto SD 500, sans-serif'}}>{skill.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
