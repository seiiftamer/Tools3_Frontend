import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
export const Select = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  function createorderNavigation() {
    navigate("/createorder");
  }
  function viewordersNavigation() {
    navigate("/display");
  }
  return (
    <div className="App">
      <p>Welcome {name ? name : "Guest"}!</p>
      <h1> Orders </h1>
      <button onClick={createorderNavigation}>Create Order </button>
      <button onClick={viewordersNavigation}>View My Orders </button>
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
export default Select;
