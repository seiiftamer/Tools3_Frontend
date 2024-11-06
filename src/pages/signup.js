// src/App.js
import React from 'react';

import '../styles.css'; // Ensure this line is correct

import { useNavigate } from 'react-router-dom';
import Registration from '../compnents/Registration';

export const SignUp = () => {
    // const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Welcome to our project</h1>
      <Registration/>
    </div>
  );
};

//<Login />
//<CreateOrderPage/>
export default SignUp;