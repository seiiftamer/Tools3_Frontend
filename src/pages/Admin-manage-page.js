import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import ManageOrdersPage from "../compnents/AdminManage.js";

const Management = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  return (
    <>
      <div className="App">
      <p>Welcome {name ? name : "Guest"}!</p>
        <ManageOrdersPage />
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
    </>
  );
};
export default Management;
