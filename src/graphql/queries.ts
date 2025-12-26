import {gql} from '@apollo/client';

export const GET_USER_REPOS = gql`
  query GetUserRepositories($userName: String!) {
    user(login: $userName) {
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

export const GET_USER_STATS = gql`
  query GetUserStats($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        totalCommitContributions
        totalRepositoriesWithContributedIssues
      }
      repositories(first: 100, privacy: PUBLIC) {
        totalCount
      }
    }
  }
`;
