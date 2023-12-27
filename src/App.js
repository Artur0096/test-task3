import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import RepositoryList from './components/RepositoryList';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <RepositoryList />
      </div>
    </ApolloProvider>
  );
}

export default App;
