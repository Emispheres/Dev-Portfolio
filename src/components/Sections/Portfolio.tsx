import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import {useScrollAnimation} from '../../hooks/useIntersectionObserver';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const {ref: titleRef, animationClass: titleAnim} = useScrollAnimation('fadeIn', 100);
  
  return (
    <Section className="bg-gray-900" sectionId={SectionId.Portfolio} maxWidth="max-w-[1260px]">
      <div className="flex flex-col gap-y-8">
        <div ref={titleRef} className={titleAnim}>
          <h2 className="self-center text-3xl font-bold text-white text-center" style={{fontFamily: '"Noto SD 500", Arial, sans-serif', letterSpacing: '0.02em'}}>Portfolio</h2>
          <h2 className="self-center text-lg text-white mb-8 text-center mt-4">Ci-dessous, quelques exemples de réalisations effectuées durant mes formations :</h2>
        </div>
        {/* Conteneur des éléments du portfolio avec mise en page en colonnes */}
        <div className=" w-full columns-2 md:columns-3 lg:columns-2">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <PortfolioCard key={`${title}-${index}`} item={item} image={image} title={title} index={index} />
            );
          })}
        </div>
      </div>
    </Section>
  );
});

// Composant séparé pour chaque carte du portfolio avec animation au scroll
const PortfolioCard: FC<{item: PortfolioItem; image: any; title: string; index: number}> = memo(({item, image, title, index}) => {
  const {ref, animationClass} = useScrollAnimation('scale', index * 50);
  
  return (
    <div ref={ref} className={`pb-6 ${animationClass}`}>
      {/* Conteneur de chaque élément avec ombre et coins arrondis */}
      <div
        className={classNames(
          'relative h-96 w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-black/30',
        )}>
        <Image alt={title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" placeholder="blur" src={image} />
        <ItemOverlay item={item} />
      </div>
    </div>
  );
});

PortfolioCard.displayName = 'PortfolioCard';

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description, shortDescription, stack, videoUrl}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (videoUrl) {
        event.preventDefault();
        setShowVideoPopup(true);
        return;
      }
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay, videoUrl],
  );

  // Parse description into list items (split by newline and remove leading dash)
  const listItems = description
    .split('\n')
    .filter(item => item.trim())
    .map(item => item.replace(/^- /, '').trim());

  return (
    <>
      <a
        className={classNames(
          'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
          {'opacity-0 hover:opacity-80': !mobile},
          showOverlay ? 'opacity-80' : 'opacity-0',
        )}
        href={videoUrl ? '#' : url}
        onClick={handleItemClick}
        ref={linkRef}
        target={videoUrl ? undefined : "_blank"}>
        <div className="relative h-full w-full p-4">
          <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto">
            {/* Titre du projet */}
            <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
            
            {/* Tags des technologies utilisées */}
            {stack && stack.length > 0 && (
              <div className="flex flex-wrap justify-center gap-1.5 mt-1">
                {stack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 text-xs font-medium bg-blue-600/80 text-white rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            )}
            
            {/* Description courte */}
            {shortDescription && (
              <p className="text-center text-xs text-gray-200 italic mt-1">{shortDescription}</p>
            )}
            
            {/* Liste des missions/tâches */}
            <ul className="list-disc list-inside text-xs text-white opacity-100 sm:text-sm space-y-1 mt-2">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
        </div>
      </a>
      {showVideoPopup && videoUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowVideoPopup(false)}>
          <div 
            className="relative max-w-4xl w-full max-h-[80vh] bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideoPopup(false)}
              className="absolute top-2 right-2 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video 
              className="w-full h-full max-h-[80vh] object-contain"
              controls
              autoPlay>
              <source src={videoUrl} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      )}
    </>
  );
});
