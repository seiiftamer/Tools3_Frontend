// src/OrderDetails.js
import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CourierDetails = () => {
  const location = useLocation();
  const [orders, setOrders] = useState([]);
  const { order } = location.state || {};

  if (!order) {
    return <p>No order details found.</p>;
  }

  const orderAcceptance = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.put(
        `http://localhost:4000/courier/orderAcceptance`,
        {
          id: orderId,
          orderStatus: newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders(
        orders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
      alert("Order status updated successfully");
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div>
      <h2>Order Details</h2>
      <p>
        <strong>Order ID:</strong> {order.id}
      </p>
      <p>
        <strong>Pickup Location:</strong> {order.pickUpLocation}
      </p>
      <p>
        <strong>Drop-off Location:</strong> {order.dropOffLocation}
      </p>
      <p>
        <strong>Package Details:</strong> {order.packageDetails}
      </p>
      <p>
        <strong>Delivery Date:</strong>{" "}
        {new Date(order.deliveryTime).toLocaleDateString()}
      </p>
      <p>
        <strong>Courier:</strong> {order.courierName || "Not Assigned"}
      </p>
      <p>
        <strong>Status:</strong> {order.orderStatus}
      </p>
      {order.orderStatus === "Pending" && (
        <button
          onClick={() => orderAcceptance(order.id, "Accepted")}
          style={{ marginTop: "20px", color: "white" }}
        >
          Accept
        </button>
      )}
      {order.orderStatus === "Pending" && (
        <button
          onClick={() => orderAcceptance(order.id, "Refused")}
          style={{ marginTop: "20px", color: "white" }}
        >
          Refuse
        </button>
      )}
      {(order.orderStatus != "Refused" && order.orderStatus != "Pending" && order.orderStatus != "Delivered") &&(
        <div>
          <select
            onChange={(e) => orderAcceptance(order.id, e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              Update Status
            </option>
            <option value="Delivered">Delivered</option>
            <option value="In Transit">In Transit</option>
            <option value="Picked Up">Picked Up</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default CourierDetails;
