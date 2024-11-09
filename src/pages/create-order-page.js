import React from "react";
import "../styles.css";
import CreateOrder from "../compnents/CreateOrder";
import { useNavigate } from "react-router-dom";
export const Order = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <CreateOrder />
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
export default Order;
