// src/AssignedOrders.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const AssignedOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssignedOrders = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.get(
          "http://localhost:4000/orders/assigned",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrders(Array.isArray(response.data.data) ? response.data.data : []);
      } catch (error) {
        console.error("Error fetching assigned orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignedOrders();
  }, []);

  const handleAccept = async (orderId) => {
    try {
      await axios.post(
        `http://localhost:4000/orders/${orderId}/accept`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders(
        orders.map((order) =>
          order.id === orderId ? { ...order, orderStatus: "Accepted" } : order
        )
      );
    } catch (error) {
      console.error("Error accepting order:", error);
    }
  };

  const handleDecline = async (orderId) => {
    try {
      await axios.post(
        `http://localhost:4000/orders/${orderId}/decline`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders(
        orders.map((order) =>
          order.id === orderId ? { ...order, orderStatus: "Declined" } : order
        )
      );
    } catch (error) {
      console.error("Error declining order:", error);
    }
  };

  return (
    <div className="assigned-orders-page">
      <h2>Assigned Orders</h2>
      {loading ? (
        <p>Loading assigned orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders assigned.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="order-item">
              <h3>Order #{order.id}</h3>
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
                <strong>Status:</strong> {order.orderStatus}
              </p>
              <div>
                <button
                  onClick={() => handleAccept(order.id)}
                  disabled={order.orderStatus !== "Pending"}
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDecline(order.id)}
                  disabled={order.orderStatus !== "Pending"}
                >
                  Decline
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AssignedOrders;
