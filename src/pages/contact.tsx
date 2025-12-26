// Import du composant qui gère le titre et description de la page
import Page from '../components/Layout/Page';
// Import de la section Contact
import Contact from '../components/Sections/Contact';

// Crée la page Contact
export default function ContactPage() {
  return (
    <Page title="Contact" description="Contact me">
      <Contact />
    </Page>
  );
}