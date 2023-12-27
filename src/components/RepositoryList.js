import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PUBLIC_REPOS = gql`
  query {
    viewer {
      repositories(first: 10, isFork: false, privacy: PUBLIC) {
        nodes {
          id
          name
          description
          owner {
            login
          }
        }
      }
    }
  }
`;

function RepositoryList() {
  const { loading, error, data } = useQuery(GET_PUBLIC_REPOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Public Repositories</h1>
      <ul>
        {data.viewer.repositories.nodes.map(repo => (
          <li key={repo.id}>
            <a href={`/repository/${repo.owner.login}/${repo.name}`}>{repo.name}</a>: {repo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;
