// src/App.js
import React from 'react';
import Registration from './Registration';
import Login from './Login';
import './styles.css'; // Ensure this line is correct

const App = () => {
  return (
    <div className="App">
      <h1>Welcome homiesss</h1>
      <Registration />
      <Login />
    </div>
  );
};

export default App;
