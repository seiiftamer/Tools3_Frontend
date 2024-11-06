// src/App.js
import React from 'react';
import Login from './compnents/Login';
import Registration from './compnents/Registration';
import './styles.css'; // Ensure this line is correct
import CreateOrderPage from './compnents/CreateOrderPage';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Welcome to our project</h1>
      <button ></button>
    </div>
  );
};

//<Login />
//<CreateOrderPage/>
export default Home;