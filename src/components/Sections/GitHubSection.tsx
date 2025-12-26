import {FC, memo, useEffect, useState} from 'react';

import {SectionId} from '../../data/data';
import GitHubProjects from '../GitHub/GitHubProjects';
import Section from '../Layout/Section';

interface Repository {
  id: string;
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  languages: {
    nodes: Array<{name: string}>;
  };
}

const GitHubSection: FC = memo(() => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <Section className="bg-neutral-900" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Mes projets GitHub</h2>

        {loading && <div className="text-center text-gray-400">Chargement des projets...</div>}
        {error && <div className="text-center text-red-500">Erreur: {error}</div>}
        {!loading && !error && <GitHubProjects repos={repos} />}
      </div>
    </Section>
  );
});

GitHubSection.displayName = 'GitHubSection';
export default GitHubSection;
