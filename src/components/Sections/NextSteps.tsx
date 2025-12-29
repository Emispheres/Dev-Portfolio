import Link from 'next/link';
import {FC, memo} from 'react';

import Section from '../Layout/Section';

interface NextStepsProps {
  // Les routes à afficher (sauf la page actuelle)
  links: Array<{label: string; href: string}>;
}

// Section "Découvrez plus" avec des liens vers les autres pages
const NextSteps: FC<NextStepsProps> = memo(({links}) => {
  return (
    <Section className="bg-neutral-900" sectionId="contact">
      <div className="flex flex-col items-center gap-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Découvrez plus</h2>
          <p className="text-gray-400 mt-2">Explorez les autres sections</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {links.map(({label, href}) => (
            <Link
              className="rounded-lg border border-orange-500 bg-neutral-800 px-6 py-4 text-center text-white transition hover:bg-orange-500 hover:text-neutral-900 font-semibold"
              href={href}
              key={href}>
              {label} →
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
});

NextSteps.displayName = 'NextSteps';
export default NextSteps;
