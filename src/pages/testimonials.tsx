// Import du composant qui gère le titre et description de la page
import Page from '../components/Layout/Page';
// Import de la section Testimonials
import Testimonials from '../components/Sections/Testimonials';

// Crée la page Testimonials
export default function TestimonialsPage() {
  return (
    <Page title="Testimonials" description="Testimonials">
      <Testimonials />
    </Page>
  );
}

