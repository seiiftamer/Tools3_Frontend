// src/App.js
import React from 'react';

import '../styles.css'; // Ensure this line is correct

import { useNavigate } from 'react-router-dom';
import MyOrders from '../compnents/OrderDisplay.js';


export const Display = () => {
    // const navigate = useNavigate();
  return (
    <div className="App">
      <MyOrders/>
    </div>
  );
};

//<Login />
//<CreateOrderPage/>
export default Display;