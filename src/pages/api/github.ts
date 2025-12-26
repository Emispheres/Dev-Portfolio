import {NextApiRequest, NextApiResponse} from 'next';

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

interface GitHubResponse {
  data: {
    user: {
      repositories: {
        nodes: Repository[];
      };
    };
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({error: 'Method not allowed'});
  }

  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!token || !username) {
    return res.status(500).json({error: 'GitHub credentials not configured'});
  }

  const query = `
    query {
      user(login: "${username}") {
        repositories(first: 6, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC) {
          nodes {
            id
            name
            description
            url
            stargazerCount
            forkCount
            languages(first: 3) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({query}),
    });

    const data: GitHubResponse = await response.json();

    if (data.data?.user?.repositories) {
      res.status(200).json(data.data.user.repositories.nodes);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    console.error('GitHub API error:', error);
    res.status(500).json({error: 'Failed to fetch repositories'});
  }
}
