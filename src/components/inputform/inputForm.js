// src/InputForm.js
import React, { useState } from 'react';
import styles from './InputForm.module.css'

function InputForm({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      
      <button type="submit">Search</button>
    </form>
  );
}

export default InputForm;
