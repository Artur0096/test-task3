// src/RepositoryList.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import styles from './RepoList.module.css'

const GET_REPOSITORIES = gql`
  query GetRepositories($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 15) {
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

function RepositoryList({ username, onSelect}) {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { queryString: `user:${username}` },
  });
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.Title}>Repositories for {username}</h2>
      <ul className={styles.list}>
        {data.search.edges.map((repo, index) => (
          <li key={index} onClick={() => onSelect(username,repo.node.name,'HEAD:')}>
            
              {repo.node.name} - {repo.node.description ? repo.node.description:"Description None"}
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;
