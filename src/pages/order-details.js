import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import OrderDetails from "../compnents/Orderdetails";
export const Details = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <OrderDetails />
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
export default Details;
