import classNames from 'classnames';
import {FC, memo, UIEventHandler, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {SectionId, testimonial} from '../../data/data';
import type {Testimonial} from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import useWindow from '../../hooks/useWindow';
import QuoteIcon from '../Icon/QuoteIcon';
import Section from '../Layout/Section';

// Composant pour afficher un carrousel de témoignages (avis clients)
const Testimonials: FC = memo(() => {
  // État pour l'index du témoignage actuellement affiché
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // État pour suivre la position du scroll (utilisé pour détecter les changements)
  const [scrollValue, setScrollValue] = useState(0);
  // État pour activer/désactiver l'effet parallaxe (désactivé sur iOS car non supporté)
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  // Référence pour stocker la largeur d'un élément du carrousel
  const itemWidth = useRef(0);
  // Référence pour accéder au conteneur HTML du scroll
  const scrollContainer = useRef<HTMLDivElement>(null);

  // Hook personnalisé pour obtenir la largeur de la fenêtre
  const {width} = useWindow();

  // Récupère les données des témoignages depuis le fichier de données
  const {imageSrc, testimonials} = testimonial;

  // Calcule l'URL de l'image de fond (optimisation avec useMemo pour éviter les recalculs)
  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  // Désactive l'effet parallaxe sur iOS/mobiles car le navigateur Safari ne supporte pas 'background-fixed'
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  // Recalcule la largeur d'un élément du carrousel chaque fois que la fenêtre change de taille
  useEffect(() => {
    itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  }, [width]);

  // Détecte quel témoignage est visible en fonction de la position du scroll
  useEffect(() => {
    if (scrollContainer.current) {
      const newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);
      setActiveIndex(newIndex);
    }
  }, [itemWidth, scrollValue]);

  // Fonction pour faire scroller jusqu'à un témoignage spécifique
  const setTestimonial = useCallback(
    (index: number) => () => {
      if (scrollContainer !== null && scrollContainer.current !== null) {
        scrollContainer.current.scrollLeft = itemWidth.current * index;
      }
    },
    [],
  );

  // Fonction pour aller au témoignage suivant (boucle au premier si on est au dernier)
  const next = useCallback(() => {
    if (activeIndex + 1 === testimonials.length) {
      setTestimonial(0)();
    } else {
      setTestimonial(activeIndex + 1)();
    }
  }, [activeIndex, setTestimonial, testimonials.length]);

  // Gère l'événement de scroll et met à jour l'état
  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(event => {
    setScrollValue(event.currentTarget.scrollLeft);
  }, []);

  // Hook personnalisé qui appelle 'next' automatiquement chaque 10 secondes (carrousel automatique)
  useInterval(next, 10000);

  // Si aucun témoignage, ne pas afficher cette section
  if (!testimonials.length) {
    return null;
  }

  return (
    // Section principale avec padding optionnel
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div
        // Conteneur avec image de fond (parallaxe optionnelle)
        className={classNames(
          'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8',
          parallaxEnabled && 'bg-fixed',
          {'bg-neutral-700': !imageSrc},
        )}
        style={imageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
        {/* Conteneur principal du contenu */}
        <div className="z-10 w-full max-w-screen-md px-4 lg:px-0">
          {/* Boîte arrondie grise contenant les témoignages */}
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg">
            {/* Carrousel : conteneur avec scroll horizontal */}
            <div
              className="no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth"
              onScroll={handleScroll}
              ref={scrollContainer}>
              {/* Affiche tous les témoignages en boucle */}
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                return (
                  <Testimonial isActive={isActive} key={`${testimonial.name}-${index}`} testimonial={testimonial} />
                );
              })}
            </div>

            {/* Points de navigation (petits cercles pour choisir un témoignage) */}
            <div className="flex gap-x-4">
              {[...Array(testimonials.length)].map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    className={classNames(
                      'h-3 w-3 rounded-full bg-gray-300 transition-all duration-500 sm:h-4 sm:w-4',
                      isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-60',
                    )}
                    disabled={isActive}
                    key={`select-button-${index}`}
                    onClick={setTestimonial(index)}></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

// Composant qui affiche un seul témoignage avec le texte et la photo de l'auteur
const Testimonial: FC<{testimonial: Testimonial; isActive: boolean}> = memo(
  ({testimonial: {text, name, image}, isActive}) => (
    // Conteneur du témoignage (devient visible/invisible selon isActive)
    <div
      className={classNames(
        'flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 transition-opacity duration-1000 sm:flex-row sm:gap-x-6',
        isActive ? 'opacity-100' : 'opacity-0',
      )}>
      {/* Photo de l'auteur ou icône de guillemets */}
      {image ? (
        <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
          {/* Icône de guillemets positionnée en haut à gauche */}
          <QuoteIcon className="absolute -left-2 -top-2 h-4 w-4 stroke-black text-white" />
          {/* Photo circulaire de l'auteur */}
          <img className="h-full w-full rounded-full" src={image} />
        </div>
      ) : (
        /* Juste l'icône de guillemets si pas de photo */
        <QuoteIcon className="h-5 w-5 shrink-0 text-white sm:h-8 sm:w-8" />
      )}

      {/* Texte du témoignage et nom de l'auteur */}
      <div className="flex flex-col gap-y-4">
        {/* Contenu du témoignage (texte en italique) */}
        <p className="prose prose-sm font-medium italic text-white sm:prose-base">{text}</p>
        {/* Nom de l'auteur avec tiret */}
        <p className="text-xs italic text-white sm:text-sm md:text-base lg:text-lg">-- {name}</p>
      </div>
    </div>
  ),
);

export default Testimonials;
