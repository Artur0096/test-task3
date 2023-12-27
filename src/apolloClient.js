import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer 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`,
  },
  cache: new InMemoryCache(),
});

export default client;