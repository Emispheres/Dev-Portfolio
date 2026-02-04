import {ChevronUpIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-5 animate-bounce">
      <a
        className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-neutral-900  sm:p-2 z-10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 active:scale-95"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-3">
      <div className="flex gap-x-4 text-neutral-500">
        <Socials />
      </div>
      <span className="text-sm text-neutral-700">© Copyright {currentYear} Emile Dzawa-Pathas</span>
            <span className="text-sm text-neutral-700">
          Tous droits réservés
      </span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
