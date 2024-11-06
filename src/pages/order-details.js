// src/App.js
import React from 'react';

import '../styles.css'; // Ensure this line is correct

import { useNavigate } from 'react-router-dom';
import OrderDetails from '../compnents/Orderdetails';

export const Details = () => {
    // const navigate = useNavigate();
  return (
    <div className="App">
      <OrderDetails/>
    </div>
  );
};

//<Login />
//<CreateOrderPage/>
export default Details;