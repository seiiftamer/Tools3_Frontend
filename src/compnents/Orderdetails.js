// src/OrderDetails.js
import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderDetails = () => {
  const location = useLocation();
  const { order } = location.state || {}; // Access the order object from state
  const navigate = useNavigate();

  // If no order data is passed, you can render an error message or redirect
  if (!order) {
    return <p>No order details found.</p>;
  }

  const cancelOrder =  async() => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.post("http://localhost:4000/order/cancelOrder", {id: order.id},{
        headers: {
          Authorization: `Bearer ${token}`, // Include token in header
        },
      });
      if (response.data.status === "success") {
        alert('Order cancelled successfully.');
        navigate('/display'); // Redirect back to My Orders page after cancellation
      } else {
        alert(response.data.message || 'Failed to cancel order.');
      }
      console.log('Fetched orders:', response.data); // Debug log

      // Access orders in response.data.data
      //setOrders(Array.isArray(response.data.data) ? response.data.data : []);
    } catch (error) {
      console.error('Error fetching orders:', error);
     // setOrders([]); // Set an empty array if there's an error
    }
  }

  return (
    <div>
      <h2>Order Details</h2>
      <p><strong>Order ID:</strong> {order.id}</p>
      <p><strong>Pickup Location:</strong> {order.pickUpLocation}</p>
      <p><strong>Drop-off Location:</strong> {order.dropOffLocation}</p>
      <p><strong>Package Details:</strong> {order.packageDetails}</p>
      <p><strong>Delivery Date:</strong> {new Date(order.deliveryTime).toLocaleDateString()}</p>
      <p><strong>Status:</strong> {order.orderStatus}</p>
      <button onClick={cancelOrder} style={{ marginTop: '20px', color: 'white', backgroundColor: 'red' }}>
        Cancel Order
      </button>
    </div>
  );
};

export default OrderDetails;
