import React from 'react';
import './App.css';
import CodeViewer from './CodeViewer';

function App() {
  return (
    <div className="App">
      <h1>GitHub Code Viewer with GraphQL</h1>
      <CodeViewer owner="OWNER_USERNAME" name="REPOSITORY_NAME" expression="BRANCH_NAME:PATH_TO_FILE" />
    </div>
  );
}

export default App;
