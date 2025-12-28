import Page from '../components/Layout/Page';
import Hero from '../components/Sections/Hero';
import {homePageMeta} from '../data/data';

export default function Home() {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Hero />
    </Page>
  );
}
