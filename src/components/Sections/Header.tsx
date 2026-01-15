import {Dialog, Transition} from '@headlessui/react';
import {Bars2Icon, Bars3BottomRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(
    () => [SectionId.About, SectionId.Skills, SectionId.Resume, SectionId.Portfolio, SectionId.Testimonials, SectionId.Contact],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

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
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const baseClass =
      '-m-1.5 p-1.5 rounded-md font-semibold first-letter:uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 text-neutral-100';
    const activeClass = classNames(baseClass, 'text-orange-500');
    const inactiveClass = classNames(baseClass, 'text-neutral-100');
    return (
      <header className="fixed top-0 z-50 hidden w-full p-4 sm:block " id={headerID}>
        {/** container */}
        <div className="relative flex items-center justify-between mx-auto max-w-full px-4">
          {/** animated background */}
          <div className={classNames("absolute inset-0 z-0", isOpen ? "bg-neutral-900/50 animate-slideInRight" : "animate-slideOutRight")}></div>
          
          <a href="/" className="relative z-10">
            <img src="/favicon-96x96.png" alt="logo" className="w-14 h-14" />
          </a>
          <nav className={classNames("absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center gap-x-8 z-10", !isOpen && "hidden")}>
            {navSections.map((section, index) => (
              <NavItem
                activeClass={activeClass}
                current={section === currentSection}
                inactiveClass={inactiveClass}
                key={section}
                section={section}
                // Passe l'index pour créer un délai différent pour chaque élément
                index={index}
                // Passe isOpen pour savoir si le menu est ouvert ou fermé
                isOpen={isOpen}
              />
            ))}
          </nav>
          <button className="relative z-10 p-6" aria-label="Menu Button" onClick={() => setIsOpen(!isOpen)}>
            <div>
              <Bars2Icon className="h-6 w-6 text-white" />
            </div>
          </button>
        </div>

      </header>
    );
  },
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
}> = memo(({section, current, inactiveClass, activeClass, onClick, index = 0, isOpen = false}) => {
  // Calcule le délai pour que chaque élément s'affiche petit à petit (0.1s entre chaque)
  const delay = index * 0.2;
  
  return (
    <Link
      className={classNames(
        current ? activeClass : inactiveClass,
        // Ajoute l'animation fadeIn seulement quand le menu est ouvert
        isOpen && "animate-fadeIn"
      )}
      href={`/#${section}`}
      key={section}
      onClick={onClick}
      // Le style applique le délai d'animation pour que les éléments apparaissent un par un
      style={{
        animationDelay: `${delay}s`,
        // Démarre les éléments transparents et l'animation les rend visibles progressivement
        opacity: 0,
        // forwards: l'élément reste visible après l'animation (ne revient pas à opacity 0)
        animationFillMode: isOpen ? 'forwards' : 'none',
      }}>
      {section}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
