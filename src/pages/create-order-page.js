// src/App.js
import React from 'react';


import '../styles.css'; // Ensure this line is correct
import CreateOrder from '../compnents/CreateOrder';
import { useNavigate } from 'react-router-dom';


 export const order = () => {
    // const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Welcome to our project</h1>
      <CreateOrder />
    </div>
  );
};

//<Login />
//<CreateOrderPage/>
export default order;