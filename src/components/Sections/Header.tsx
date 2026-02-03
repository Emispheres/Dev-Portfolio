import {Dialog, Transition} from '@headlessui/react';
import {Bars2Icon, Bars3BottomRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  // Suivi de la section actuellement visible en fonction de la position du défilement
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  
  // Définir toutes les sections de navigation disponibles
  const navSections = useMemo(
    () => [SectionId.About, SectionId.Skills, SectionId.Resume, SectionId.Portfolio, SectionId.Contact],
    [],
  );

  // Mettre à jour la section active quand l'utilisateur fait défiler vers différentes parties de la page
  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  // Observer les intersections de défilement pour surligner l'élément de navigation actif
  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    // Contrôler l'état d'ouverture/fermeture du menu (ouvert par défaut au chargement)
    const [isOpen, setIsOpen] = useState<boolean>(true);
    // Suivi si le menu a été fermé une fois (prévient les animations au chargement de la page)
    //const [hasBeenOpened, setHasBeenOpened] = useState<boolean>(true);
    const [hasBeenOpened] = useState<boolean>(true);
    
    // Gérer le basculement du menu et suivre le premier événement de fermeture
    const handleClick = () => {
      const newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
      // Aucune logique supplémentaire nécessaire puisque hasBeenOpened est déjà true
    };
    
    const baseClass = '-m-1.5 p-1.5 rounded-md font-semibold uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 text-neutral-100';
    // Classes de base pour l'élément de navigation actif (surligné en orange)
    const activeClass = classNames(baseClass, 'text-orange-400/90');
    // Classes de base pour les éléments de navigation inactifs
    const inactiveClass = classNames(baseClass, 'text-neutral-100');
    
    return (
      <header className="fixed top-0 z-50 w-full hidden sm:block" id={headerID}>
        <div className="relative flex items-center justify-between mx-auto max-w-full px-4">
          {/* Superposition de fond qui glisse vers l'intérieur/l'extérieur du menu - visible uniquement sur le bureau (point d'arrêt sm) */}
          <div 
            className={classNames(
              "absolute inset-0 z-0",
              // Glisser depuis la droite quand le menu s'ouvre
              isOpen && "bg-neutral-900/70 animate-slideInRight",
              // Glisser vers la droite quand le menu se ferme (après que les éléments de nav disparaissent)
              !isOpen && hasBeenOpened && "bg-neutral-900/70 animate-slideOutLeft",
            )}
            // Retarder la sortie du fond de 0.6s pour permettre aux éléments de nav de s'estomper d'abord, puis persister l'état caché
            style={!isOpen && hasBeenOpened ? {animationDelay: '0.6s', animationFillMode: 'forwards'} : {}}
          />
          
          {/* Logo - côté gauche, toujours visible */}
          <a href="/" className="relative z-10 p-2 ml-4">
            <img src="/favicon-96x96.png" alt="logo" className="w-16 h-16" />
          </a>
          
          {/* Éléments de navigation - centrés, avec animations d'apparition/disparition échelonnées, désactivés à la fermeture */}
          <nav className={classNames("absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center gap-x-12 z-10", !isOpen && "pointer-events-none")}>
            {navSections.map((section, index) => (
              <NavItem
                key={section}
                section={section}
                current={section === currentSection}
                activeClass={activeClass}
                inactiveClass={inactiveClass}
                // Passer l'index pour les délais d'animation échelonnés (0s, 0.1s, 0.2s...)
                index={index}
                isOpen={isOpen}
                hasBeenOpened={hasBeenOpened}
              />
            ))}
          </nav>
          
          {/* Bouton de basculement du menu - côté droit */}
          <button className="relative rounded-md z-10 p-3 bg-[#0B0A0D] mr-4" aria-label="Menu" onClick={handleClick}>
            <Bars2Icon className="h-6 w-6 text-white" />
          </button>
        </div>
      </header>
    );
  }
);

const MobileNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    const baseClass =
      'p-2 rounded-md first-letter:uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500';
    const activeClass = classNames(baseClass, 'bg-neutral-900 text-white font-bold');
    const inactiveClass = classNames(baseClass, 'text-neutral-200 font-medium');
    return (
      <>
        <button
          aria-label="Menu Button"
          className="fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden"
          onClick={toggleOpen}>
          <Bars3BottomRightIcon className="h-8 w-8 text-white" />
          <span className="sr-only">Open sidebar</span>
        </button>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative w-4/5 bg-stone-800">
                <nav className="mt-5 flex flex-col gap-y-2 px-2">
                  {navSections.map(section => (
                    <NavItem
                      activeClass={activeClass}
                      current={section === currentSection}
                      inactiveClass={inactiveClass}
                      key={section}
                      onClick={toggleOpen}
                      section={section}
                    />
                  ))}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  },
);

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
  index?: number;
  isOpen?: boolean;
  hasBeenOpened?: boolean;
}> = memo(({section, current, inactiveClass, activeClass, onClick, index = 0, isOpen = false, hasBeenOpened = false}) => {
  // Délais d'animation pour l'effet échelonné : premier élément 0s, deuxième 0.1s, troisième 0.2s, etc.
  const delayOpen = 0.7 + index * 0.1;
  const delayClose = index * 0.1;
  
  return (
    <Link
      className={classNames(
        current ? activeClass : inactiveClass,
        // Une seule animation s'applique : fadeIn à l'ouverture, fadeOut à la fermeture (après la première fermeture)
        isOpen ? "animate-fadeIn" : hasBeenOpened ? "animate-fadeOut" : ""
      )}
      href={`/#${section}`}
      onClick={onClick}
      style={{
        // Échelonner les animations en fonction de l'index de l'élément de navigation
        animationDelay: isOpen ? `${delayOpen}s` : `${delayClose}s`,
        // Garder les éléments cachés jusqu'à ce qu'ils s'estompent, visibles pendant la disparition
        opacity: !isOpen && hasBeenOpened ? 1 : 0,
        // Persister l'état final de l'animation (prévient le scintillement)
        animationFillMode: 'forwards',
      }}>
      {section}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
