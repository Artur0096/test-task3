import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_REPO_CONTENTS = gql`
  query GetRepoContents($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      object(expression: "master:") {
        ... on Tree {
          entries {
            name
            type
          }
        }
      }
    }
  }
`;

function FileViewer({ owner, name }) {
  const { loading, error, data } = useQuery(GET_REPO_CONTENTS, {
    variables: { owner, name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const contents = data.repository.object.entries;

  return (
    <div>
      <h2>Contents of {name}</h2>
      <ul>
        {contents.map((content, index) => (
          <li key={index}>
            {content.name} - {content.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileViewer;
