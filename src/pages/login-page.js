// src/App.js
import React from "react";
import Login from "../compnents/Login.js";
import "../styles.css"; // Ensure this line is correct
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // const navigate = useNavigate();return <> hot ela ayzo   </>; => we r using <></> fragment to insert a lot of elements in render
  return <>

    <div className="App">
      <h1>Welcome to our project</h1>
    <Login />
    </div>
  </>;
};

//<CreateOrderPage/>
export default LoginPage;
