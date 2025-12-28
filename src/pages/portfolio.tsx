// Import du composant qui gère le titre et description de la page
import Page from '../components/Layout/Page';
import GitHubSection from '../components/Sections/GitHubSection';
import Portfolio from '../components/Sections/Portfolio';

// Crée la page Portfolio
export default function PortfolioPage() {
  return (
    <Page description="My portfolio" title="Portfolio">
      <Portfolio />
      <GitHubSection />
    </Page>
  );
}
