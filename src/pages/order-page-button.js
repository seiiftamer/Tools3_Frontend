// src/App.js
import React from 'react';


import '../styles.css'; // Ensure this line is correct
import CreateOrder from '../compnents/CreateOrder';
import { useNavigate } from 'react-router-dom';


 export const Select = () => {
    const navigate= useNavigate();
  function createorderNavigation(){
    navigate("/createorder");
  }
  function viewordersNavigation(){
    navigate("/display");
  }
  return (
    <div className="App">
    <h1> Orders </h1>
    <button onClick={createorderNavigation}>create order </button>
    <button onClick={viewordersNavigation}>view my orders </button>
  </div>
  );
};

//<Login />
//<CreateOrderPage/>
export default Select;