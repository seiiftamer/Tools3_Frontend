import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import CourierOrders from "../compnents/courierDisplay.js";
export const CourierOrder = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  return (
    <div className="App">
      <p>Welcome {name ? name : "Guest"}!</p>
      <CourierOrders />
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
export default CourierOrder;
