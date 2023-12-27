import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer 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`,
  },
  cache: new InMemoryCache(),
});

export default client;
