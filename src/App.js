/*// src/App.js
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

export default App; */
// src/App.js
import React from 'react';
import './styles.css'; // Ensure this line is correct
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  function navigateToAdmin() {
    navigate("/Adminsignup");
  }

  function navigateToCustomer() {
    navigate("/UserSignUp");
  }

  function navigateToCourier() {
    navigate("/CourierSignUp");
  }

  function navigateToadmin() {
    navigate("/Adminlogin");
  }

  function navigateTocustomer() {
    navigate("/Userlogin");
  }

  function navigateTocourier() {
    navigate("/Courierlogin");
  }

  return (
    <div className="App">
      <h1>Registration</h1>
      <button onClick={navigateToAdmin}>Admin</button>
      <button onClick={navigateToCustomer}>Customer</button>
      <button onClick={navigateToCourier}>Courier</button>

      <h1>Login</h1>
      <button onClick={navigateToadmin}>Admin</button>
      <button onClick={navigateTocustomer}>Customer</button>
      <button onClick={navigateTocourier}>Courier</button>
    </div>
  );
};

export default App;
