import {FC, memo} from 'react';

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

interface GitHubProjectsProps {
  repos: Repository[];
}

const GitHubProjects: FC<GitHubProjectsProps> = memo(({repos}) => {
  if (!repos || repos.length === 0) {
    return <div className="text-center text-gray-500">Aucun projet à afficher</div>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {repos.map(repo => (
        <a
          className="rounded-lg border border-neutral-300 bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800"
          href={repo.url}
          key={repo.id}
          rel="noopener noreferrer"
          target="_blank">
          <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">{repo.name}</h3>
          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
            {repo.description || 'Pas de description'}
          </p>
          <div className="mb-3 flex flex-wrap gap-2">
            {repo.languages?.nodes?.map(lang => (
              <span
                className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                key={lang.name}>
                {lang.name}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-neutral-500">
            <span>⭐ {repo.stargazerCount}</span>
            <span>🍴 {repo.forkCount}</span>
          </div>
        </a>
      ))}
    </div>
  );
});

GitHubProjects.displayName = 'GitHubProjects';
export default GitHubProjects;
