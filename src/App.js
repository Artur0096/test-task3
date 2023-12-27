import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import RepositoryList from './components/RepositoryList';
//import RepositoryDetails from './components/RepositoryDetails';

function App() {
  return (
    <Routes>
        <Route path="/" exact component={RepositoryList} />
    </Routes>
  );
}

export default App;
