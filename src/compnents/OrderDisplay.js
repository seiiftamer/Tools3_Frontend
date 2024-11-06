// src/MyOrders.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import order from '../pages/create-order-page';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch orders from backend
    const fetchOrders = async () => {
      const token = localStorage.getItem('authToken');
      try {
        const response = await axios.get("http://localhost:4000/order/getByUser", {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in header
          },
        });
        console.log('Fetched orders:', response.data); // Debug log

        // Access orders in response.data.data
        setOrders(Array.isArray(response.data.data) ? response.data.data : []);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setOrders([]); // Set an empty array if there's an error
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
    };

    navigate(`/vieworder`, { state: { order: orderDetails } });
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
              <p><strong>Package Details:</strong> {order.packageDetails}</p>
              <button onClick={() => handleViewDetails(order)}>View Details</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;
