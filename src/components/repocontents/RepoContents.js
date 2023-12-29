// src/RepoContents.js
import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_REPO_CONTENTS = gql`
  query GetRepoContents($userName: String!, $name: String!, $path:String! ) {
    repository(owner: $userName, name: $name) {
      object(expression: $path) {
        # Top-level.
        ... on Tree {
          entries {
            name
            type
            object {
              ... on Blob {
                byteSize
                text
              }
  
              
            }
          }
        }
      }
    }
  }
`;

function RepoContents({selectedRepo,path,setPath}) {
  let [show, setShow] = useState();  
 
    console.log('selectedRepo2: ', selectedRepo)
    let name = selectedRepo[1];
    let userName = selectedRepo[0];
  const { loading, error, data } = useQuery(GET_REPO_CONTENTS, {
    variables: {userName,name,path},
  });
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log('data: ',data)

  


  let contents = data.repository.object.entries;
  console.log('contents: ', contents[0].type)
 
  return (
    <div>
      <h2>Contents of {selectedRepo[1]}</h2>
      <ul>
        {contents.map((content, index) => (
          <li onClick={()=>{
            (content.type == 'tree'?setPath(path + content.name + "/"): setShow(content.object.text) );


          }} key={index}>
            {content.name}
          </li>
          
        ))}
      </ul>
      <div>
          {show}
      </div>
    </div>
  );
}

export default RepoContents;
