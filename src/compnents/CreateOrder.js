import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateOrder = () => {
  const [orderDetails, setOrderDetails] = useState({
    pickUpLocation: "",
    dropOffLocation: "",
    packageDetails: "",
    deliveryTime: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting order:", orderDetails);
    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/order/createOrder`,
        {
          pickUpLocation: orderDetails.pickUpLocation,
          dropOffLocation: orderDetails.dropOffLocation,
          packageDetails: orderDetails.packageDetails,
          deliveryTime: orderDetails.deliveryTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Order created:", response.data);
      setMessage("Order created successfully!");
      navigate("/order");

      setOrderDetails({
        pickUpLocation: "",
        dropOffLocation: "",
        packageDetails: "",
        deliveryTime: "",
      });
    } catch (error) {
      console.error("Error creating order:", error);
      setMessage("Failed to create order. Please try again.");
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
