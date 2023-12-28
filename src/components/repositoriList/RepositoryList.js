// src/RepositoryList.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import styles from './RepoList.module.css'

const GET_REPOSITORIES = gql`
  query GetRepositories($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            description
            url
          }
        }
      }
    }
  }
`;

function RepositoryList({ username}) {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { queryString: `user:${username}` },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.Title}>Repositories for {username}</h2>
      <ul className={styles.list}>
        {data.search.edges.map((repo, index) => (
          <li key={index}>
            <a href={repo.node.url} target="_blank" rel="noopener noreferrer">
              {repo.node.name} - {repo.node.description ? repo.node.description:"Description None"}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;
