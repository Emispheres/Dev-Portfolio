import {useRouter} from 'next/router';
import {FC, memo, ReactNode, useMemo} from 'react';

import {SectionId} from '../../data/data';
import Footer from '../Sections/Footer';
import Header from '../Sections/Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = memo(({children}) => {
  const router = useRouter();

  // Récupère la section actuelle en fonction de la route
  const currentSection = useMemo(() => {
    const routeToSectionMap: Record<string, SectionId> = {
      '/': SectionId.Hero,
      '/about': SectionId.About,
      '/resume': SectionId.Resume,
      '/portfolio': SectionId.Portfolio,
      '/testimonials': SectionId.Testimonials,
      '/contact': SectionId.Contact,
    };
    return routeToSectionMap[router.pathname] || null;
  }, [router.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentSection={currentSection} />
      <main className={`flex-1 bg-pink-900 ${currentSection !== SectionId.Hero ? 'mx-16 sm:mx-32' : ''}`}  style={{
      boxShadow: '-20px 0 30px rgba(0, 0, 0, 0.3), 20px 0 30px rgba(0, 0, 0, 0.3)'}}>
        {children}
      </main>
      <Footer />
    </div>
  );
});

MainLayout.displayName = 'MainLayout';
export default MainLayout;
