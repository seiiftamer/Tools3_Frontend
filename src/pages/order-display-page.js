import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import MyOrders from "../compnents/OrderDisplay.js";
export const Display = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <MyOrders />
      <button
        onClick={() => navigate("/")}
        style={{
          width: 100,
          marginTop: "20px",
          color: "white",
          backgroundColor: "red",
        }}
      >
        Log Out
      </button>
    </div>
  );
};
export default Display;
