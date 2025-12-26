import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';

import MainLayout from '../components/Layout/MainLayout';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
});

export default MyApp;
