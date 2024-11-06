// src/App.js
import React from 'react';

import './styles.css'; // Ensure this line is correct
import { useNavigate } from 'react-router-dom';
// import CreateOrderPage from './compnents/CreateOrderPage';

const App = () => {
  const navigate= useNavigate();
  function loginPageNavigation(){
    navigate("/login");
  }
  function signUpPageNavigation(){
    navigate("/signup");
  }
  function orderNavigation(){
    navigate("/createorder");
  }
  return (
<div className="App">
      <h1> Welcome to our project </h1>
      <button onClick={signUpPageNavigation}>sign up </button>
      <button onClick={loginPageNavigation}>login </button>
    </div>
  );
};

//<button onClick={orderNavigation}>create order </button>

export default App;
