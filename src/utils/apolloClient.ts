import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined', // SSR compatibility
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    credentials: 'same-origin',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
