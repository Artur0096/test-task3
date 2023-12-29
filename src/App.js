// src/App.js
import React, { useState } from 'react';
import InputForm from './components/inputform/inputForm';
import RepositoryList from './components/repositoriList/RepositoryList';
import styles from "./App.module.css"
import RepoContents from './components/repocontents/RepoContents';

function App() {
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (username, repoName) => {
    setSearchParams({ username, repoName });
  };
  const [selectedRepo, setSelectedRepo] = useState(null);
  let [path, setPath] = useState("HEAD:");
  
  const handleSelectRepo = (owner,name) => {
    setSelectedRepo([owner, name]);
    setPath("HEAD:")
  };
  console.log('selected: ',selectedRepo)

  return (
    <div className={styles.app}>
      <h1>GitHub Public Repositories</h1>
      <InputForm onSearch={handleSearch} />
      {searchParams && (
        <RepositoryList onSelect={handleSelectRepo} username={searchParams.username} repoName={searchParams.repoName} />
      )}
     {selectedRepo && <RepoContents path = {path} setPath={setPath} selectedRepo={selectedRepo} />}
    </div>
  );
}

export default App;
