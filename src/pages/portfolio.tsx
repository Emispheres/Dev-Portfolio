// Import du composant qui gère le titre et description de la page
import Page from '../components/Layout/Page';
// Import de la section Portfolio
import Portfolio from '../components/Sections/Portfolio';
// Import de la section GitHub
import GitHubSection from '../components/Sections/GitHubSection';

// Crée la page Portfolio
export default function PortfolioPage() {
  return (
    <Page title="Portfolio" description="My portfolio">
      <Portfolio />
      <GitHubSection />
    </Page>
  );
}