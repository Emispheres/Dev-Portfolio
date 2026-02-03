import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems, softSkills} = aboutData;
  return (
    <Section className="bg-white " sectionId={SectionId.About} maxWidth="max-w-[1260px]">
      {/* Wrapper pour la grille et les skills */}
      <div className="flex flex-col gap-y-12">
        {/* Grille principale: image + contenu (profil + infos) */}
        <div className={classNames('grid grid-cols-1 gap-x-10', {'md:grid-cols-5': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative h-32 w-32 rounded-md overflow-hidden md:h-[30rem] md:w-[30rem]">
                <Image alt="about-me-image" className="h-full w-full object-contain  rounded-full" src={profileImageSrc} />
              </div>
            </div>
            {/* Infos sous l'image */}
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8" style={{fontFamily: 'Roboto, sans-serif'}}>
              {aboutItems.map(({label, text, Icon}, idx) => (
                <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                  {Icon && <Icon className="h-5 w-5 text-black" />}
                  <span className="text-sm font-bold text-black">{label}:</span>
                  <span className="text-sm text-black">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
          
          {/* Boîte de description*/}
          <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
            <div className="flex flex-col gap-y-2">
              {/* Description principale */}
              <h2 className="text-4xl font-bold self-center text-black mb-6" style={{fontFamily: '"Noto SD 500", Arial, sans-serif'}}>À propos de moi</h2>
              <p className="prose prose-sm text-black self-center text-justify sm:prose-base whitespace-pre-wrap" 
              style={{fontFamily: '"Roboto", sans-serif'}}>{description}</p>
            </div>
          </div>
        </div>

        {/* Section Savoir-faire */}
        {softSkills && softSkills.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {softSkills.map((skill, idx) => (
              <div key={idx} className="bg-gray-100 border border-gray-300 rounded-md p-4 text-center">
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
