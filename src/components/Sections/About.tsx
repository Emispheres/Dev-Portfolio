import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-white " sectionId={SectionId.About}>
      {/* Grille principale: image + contenu (profil + infos) */}
      <div className={classNames('grid grid-cols-1 gap-4', {'md:grid-cols-5': !!profileImageSrc})}>
      {!!profileImageSrc && (
        <div className="col-span-1 md:col-span-2 flex flex-col  justify-between">
          {/* Image */}
          <div className="flex justify-center  ">
            <div className="relative h-32 w-32 overflow-hidden md:h-[31rem] md:w-[18rem]">
              <Image alt="about-me-image" className="h-full w-full object-cover rounded-lg" src={profileImageSrc} />
            </div>
          </div>
          {/* Infos sous l'image */}
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
        
        {/* Boîte de description + infos */}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            {/* Description principale */}
            <h2 className="text-2xl font-bold text-black">Profil</h2>
            <p className="prose prose-sm text-black sm:prose-base whitespace-pre-wrap">{description}</p>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
