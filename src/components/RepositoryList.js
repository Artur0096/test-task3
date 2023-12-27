import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_FILE_CONTENT = gql`
  query GetFileContent($owner: String!, $name: String!, $expression: String!) {
    repository(owner: $owner, name: $name) {
      object(expression: $expression) {
        ... on Blob {
          text
        }
      }
    }
  }
`;

function CodeViewer({ owner, name, expression }) {
  const { loading, error, data } = useQuery(GET_FILE_CONTENT, {
    variables: { owner, name, expression },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const content = data.repository.object.text;

  return (
    <pre>
      <code>{content}</code>
    </pre>
  );
}

export default CodeViewer;
