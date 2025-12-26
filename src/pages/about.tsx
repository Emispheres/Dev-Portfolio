// Import du composant qui gère le titre et description de la page
import Page from '../components/Layout/Page';
// Import de la section About
import About from '../components/Sections/About';

// Crée la page About
export default function AboutPage() {
  return (
    <Page title="About" description="About me">
      <About />
    </Page>
  );
}