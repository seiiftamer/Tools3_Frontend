import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import CourierDetails from "../compnents/courierDetails.js";
export const CourierDetailsPage = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  return (
    <div className="App">
      <CourierDetails />
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

export default CourierDetailsPage;
