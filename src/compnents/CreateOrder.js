import React, { useState } from 'react';


const CreateOrder = () => {
  // State for form inputs
  const [orderDetails, setOrderDetails] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    packageDetails: '',
    deliveryTime: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({
      ...orderDetails,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, handle order submission (e.g., send to backend)
    console.log('Order details submitted:', orderDetails);

    
  };









  return (
    <div className="create-order-page">
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="pickupLocation">Pickup Location:</label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            value={orderDetails.pickupLocation}
            onChange={handleChange}
            placeholder="Enter pickup location"
            required
          />
        </div>

        <div>
          <label htmlFor="dropoffLocation">Drop-off Location:</label>
          <input
            type="text"
            id="dropoffLocation"
            name="dropoffLocation"
            value={orderDetails.dropoffLocation}
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
          <label htmlFor="deliveryTime">Select Delivery Time:</label>
          <select
            id="deliveryTime"
            name="deliveryTime"
            value={orderDetails.deliveryTime}
            onChange={handleChange}
            required
          >
            <option value="">Choose a time...</option>
            <option value="morning">Morning (8 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="evening">Evening (4 PM - 8 PM)</option>
          </select>
        </div>

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default CreateOrder;
