import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer YOUR_PERSONAL_ACCESS_TOKEN`,
  },
  cache: new InMemoryCache(),
});

export default client;
