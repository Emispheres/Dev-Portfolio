import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-800 " sectionId={SectionId.About}>
      {/* Grille principale: image (col 1) + contenu (col 3 quand image présente) */}
      <div className={classNames('grid grid-cols-1 gap-y-4 gap-4' , {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
              <>
                {/* Boîte de l'image de profil */}
                <div className="col-span-1 flex justify-center md:justify-start ">
                  <div className="relative h-24 w-24 translate-y-8 overflow-hidden  md:h-96 md:w-96">
                    <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
                  </div>
                </div>
              </>
        )}
        {/* Boîte de description + infos */}
        <div className={classNames('col-span-1 flex flex-col gap-y-6  ', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            {/* Description principale */}
            <h2 className="text-2xl font-bold text-white">Profil</h2>
            <p className="prose prose-sm text-black sm:prose-base">{description}</p>
          </div>
          {/* Liste des informations clés */}
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-black" />}
                <span className="text-sm font-bold text-black">{label}:</span>
                <span className=" text-sm text-black">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
