// src/MyOrders.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CourierOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.get(
          "http://localhost:4000/courier/getOrders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Fetched orders:", response.data);

        setOrders(Array.isArray(response.data.data) ? response.data.data : []);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);
  const handleViewDetails = (order) => {
    const orderDetails = {
      id: order.id,
      pickUpLocation: order.pickUpLocation,
      dropOffLocation: order.dropOffLocation,
      packageDetails: order.packageDetails,
      deliveryTime: order.deliveryTime,
      orderStatus: order.orderStatus,
      courierName: order.courier.name,
    };

    navigate(`/courierOrderDetails`, { state: { order: orderDetails } });
  };

  return (
    <div className="my-orders-page">
      <h2>My Orders</h2>
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="order-item">
              <h3>Order #{order.id}</h3>
              <p>
                <strong>Package Details:</strong> {order.packageDetails}
              </p>
              <button onClick={() => handleViewDetails(order)}>
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourierOrders;
