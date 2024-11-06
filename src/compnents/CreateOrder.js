// src/CreateOrder.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateOrder = () => {
  // State for form inputs
  const [orderDetails, setOrderDetails] = useState({
    pickUpLocation: '',
    dropOffLocation: '',
    packageDetails: '',
    deliveryTime: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting order:", orderDetails);
    const token = localStorage.getItem('authToken');

    try {
      const response = await axios.post("http://localhost:4000/order/createOrder", {
        pickUpLocation: orderDetails.pickUpLocation,
        dropOffLocation: orderDetails.dropOffLocation,
        packageDetails: orderDetails.packageDetails,
        deliveryTime: orderDetails.deliveryTime,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in header
        },
      } );
      
      console.log('Order created:', response.data);
      setMessage('Order created successfully!');
        navigate("/order");
      
      // Clear the form
      setOrderDetails({
        pickUpLocation: '',
        dropOffLocation: '',
        packageDetails: '',
        deliveryTime: ''
      });
      
      // Navigate to another page, e.g., orders list or confirmation page
      // navigate('/my-orders'); // Adjust as needed
    } catch (error) {
      console.error('Error creating order:', error);
      setMessage('Failed to create order. Please try again.');
    }
  };
  
  return (
    <div className="create-order-page">
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pickUpLocation">Pickup Location:</label>
          <input
            type="text"
            id="pickUpLocation"
            name="pickUpLocation"
            value={orderDetails.pickupLocation}
            onChange={handleChange}
            placeholder="Enter pickup location"
            required
          />
        </div>

        <div>
          <label htmlFor="dropOffLocation">Drop-off Location:</label>
          <input
            type="text"
            id="dropOffLocation"
            name="dropOffLocation"
            value={orderDetails.dropOffLocation}
            onChange={handleChange}
            placeholder="Enter drop-off location"
            required
          />
        </div>

        <div>
          <label htmlFor="packageDetails">Package Details:</label>
          <textarea
            id="packageDetails"
            name="packageDetails"
            value={orderDetails.packageDetails}
            onChange={handleChange}
            placeholder="Describe the package"
            required
          ></textarea>
        </div>

        <div>
        <label htmlFor="deliveryTime">Select Delivery Date:</label>
        <input
          type="date"
          id="deliveryTime"
          name="deliveryTime"
          value={orderDetails.deliveryTime}
          onChange={handleChange}
          required
        />
      </div>


      <button type="submit">Submit Order</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateOrder;
