import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';
import {heroData, SectionId, skillsIcons} from '../../data/data';
import Section from '../Layout/Section';
import SkillsIcon from '../SkillsIcon';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      {/* Conteneur principal background avec effet parallax */}
      <div className="relative flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-center bg-fixed"
        style={{backgroundImage: `url('${(imageSrc as any).src}')`}}
      >
      <div className="absolute inset-0 z-[5] bg-black/50"></div>

        {/* Contenu principal - descendre davantage */}
        <div className="z-10 max-w-screen-xl px-4 lg:px-0 mt-56">
          <div className="flex flex-col  gap-y-6 rounded-xl p-8 text-center items-center ">
            <h1 className="text-4xl font-medium text-white  sm:text-5xl lg:text-6xl">{name}</h1>
            <div className="mt-8">
            {description}
            </div>
           { /*<div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>*/}
            {/* Boutons "CV" et "Contact" - générés depuis heroData.actions */}
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex mt-4 gap-x-4 rounded-lg border-2 bg-none px-24 py-3 text-base font-medium text-white ring-offset-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-lg transition-colors',
                    primary ? 'border-orange-500 ring-orange-500 hover:border-orange-300' : 'border-white ring-white hover:border-orange-500',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />}
                </a>
              ))}
            </div>
          </div>
          {/* Icones des compétences - EN DESSOUS DE TOUT */}
        <div className="flex flex-col gap-y-4 w-full">
          <SkillsIcon skills={skillsIcons} />
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
