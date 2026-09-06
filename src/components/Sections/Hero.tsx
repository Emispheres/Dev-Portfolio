import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo, useCallback} from 'react';
import {heroData, SectionId, skillsIcons} from '../../data/data';
import Section from '../Layout/Section';
import SkillsIcon from '../SkillsIcon';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  // Fonction pour créer l'effet ripple
  const handleButtonClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('ripple-effect');
    
    const existingRipple = button.querySelector('.ripple-effect');
    if (existingRipple) existingRipple.remove();
    
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  }, []);

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      {/* Conteneur principal background avec effet parallax */}
      <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-gray-900 bg-cover bg-center bg-fixed"
        style={{backgroundImage: `url('${(imageSrc as any).src}')`}}
      >
      <div className="absolute inset-0 z-[5] bg-black/30"></div>

        {/* Contenu principal */}
        <div className="z-10 w-full max-w-screen-xl px-4 lg:px-0 mt-0 2xl:mt-20">
          <div className="flex flex-col gap-y-2 sm:gap-y-4 lg:gap-y-6 2xl:gap-y-8 rounded-xl p-4 text-center items-center">
            <h1 className="text-4xl font-medium text-white sm:text-4xl md:text-5xl 2xl:text-6xl animate-fadeIn" style={{fontFamily: '"Noto SD 500", Arial, sans-serif'}}>{name}</h1>
            <div className="mt-2 sm:mt-4 2xl:mt-8 animate-fadeIn" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            {description}
            </div>
           { /*<div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>*/}
            {/* Boutons "CV" et "Contact" - générés depuis heroData.actions */}
            <div className="flex w-full justify-center gap-x-4 flex-wrap mt-2 sm:mt-4 2xl:mt-8">
              {actions.map(({href, text, Icon, color}, index) => (
                <a className={classNames(
                    'flex mt-2 sm:mt-4 gap-x-2 sm:gap-x-4 rounded-full ' + color + ' px-6 py-2 sm:px-16 sm:py-3 2xl:px-24 text-sm font-medium text-white sm:text-base 2xl:text-lg btn-interactive ripple-container animate-fadeIn'
                  )}
                  href={href}
                  key={text}
                  onClick={handleButtonClick}
                  download={href.includes('.pdf') ? 'resume.pdf' : undefined}
                  style={{animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'both'}}>
                  {text}
                  {Icon && <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-white sm:h-7 sm:w-7 transition-transform group-hover:translate-x-1" />}
                  
                </a>
              ))}
            </div>
          </div>
          {/* Icones des compétences - EN DESSOUS DE TOUT */}
        <div className="flex flex-col gap-y-2 2xl:gap-y-4 w-full animate-fadeInUp mt-2 2xl:mt-4 pb-12 lg:pb-8 2xl:pb-0" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
          <SkillsIcon skills={skillsIcons} />
        </div>
        </div>

        <div className="absolute inset-x-0 bottom-2 lg:bottom-6 2xl:bottom-12 z-20 flex justify-center ">
          <a
            className=" animate-bounce rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-neutral-900  sm:p-1 lg:p-2 2xl:p-3 sm:mr-14 z-10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 active:scale-95 "
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6 " />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
