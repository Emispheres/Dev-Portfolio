import {FC, memo, ReactNode} from 'react';

import Footer from '../Sections/Footer';
import Header from '../Sections/Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = memo(({children}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={'flex-1 '}>
        {children}
      </main>
      <Footer />
    </div>
  );
});

MainLayout.displayName = 'MainLayout';
export default MainLayout;
