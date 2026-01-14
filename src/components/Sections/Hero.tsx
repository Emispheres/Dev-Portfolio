import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useEffect, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {heroData, SectionId, skillsIcons} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';
import SkillsIcon from '../SkillsIcon';

const Hero: FC = memo(() => {
  // État pour activer/désactiver l'effet parallax (désactivé sur iOS)
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  // Désactive l'effet parallax sur iOS/mobiles car Safari ne supporte pas 'background-fixed'
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      {/* Conteneur principal background avec effet parallax */}
      <div 
        className={classNames(
          'relative flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-center',
          parallaxEnabled && 'bg-fixed',
          {'bg-gray-900': !imageSrc},
        )}
        style={imageSrc ? {backgroundImage: `url(${typeof imageSrc === 'string' ? imageSrc : imageSrc.src})`} : undefined}
      >
      <div className="absolute inset-0 z-[5] bg-black/10"></div>
        {/* Contenu principal  max-w-screen-lg */}
        <div className="z-10 max-w-screen-xl px-4 lg:px-0">
          <div className="flex flex-col items-start gap-y-6 rounded-xl bg-neutral-900/50 p-8 text-start shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl " >{name}</h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <SkillsIcon skills={skillsIcons} />
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
