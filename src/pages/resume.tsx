// Import du composant qui gère le titre et description de la page
import Page from '../components/Layout/Page';
// Import de la section Resume
import Resume from '../components/Sections/Resume';

// Crée la page Resume
export default function ResumePage() {
  return (
    <Page description="My resume" title="Resume">
      <Resume />
    </Page>
  );
}
