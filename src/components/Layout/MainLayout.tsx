import {useRouter} from 'next/router';
import {FC, memo, ReactNode, useMemo} from 'react';

import Header from '../Sections/Header';
import Footer from '../Sections/Footer';
import {SectionId} from '../../data/data';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = memo(({children}) => {
  const router = useRouter();

  // Mappe les routes aux vraies valeurs de sections
  const routeToSectionMap: Record<string, SectionId> = {
    '/': SectionId.Hero,
    '/about': SectionId.About,
    '/resume': SectionId.Resume,
    '/portfolio': SectionId.Portfolio,
    '/testimonials': SectionId.Testimonials,
    '/contact': SectionId.Contact,
  };

  // Récupère la section actuelle en fonction de la route
  const currentSection = useMemo(() => {
    return routeToSectionMap[router.pathname] || null;
  }, [router.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentSection={currentSection} />
      {children}
      <Footer />
    </div>
  );
});

MainLayout.displayName = 'MainLayout';
export default MainLayout;