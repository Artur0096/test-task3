// src/App.js
import React, { useState } from 'react';
import InputForm from './components/inputform/inputForm';
import RepositoryList from './components/repositoriList/RepositoryList';
import styles from "./App.module.css"

function App() {
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (username, repoName) => {
    setSearchParams({ username, repoName });
  };

  return (
    <div className={styles.app}>
      <h1>GitHub Public Repositories</h1>
      <InputForm onSearch={handleSearch} />
      {searchParams && (
        <RepositoryList username={searchParams.username} repoName={searchParams.repoName} />
      )}
    </div>
  );
}

export default App;
