import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const location = useLocation();
  const { order } = location.state || {}; 
  const navigate = useNavigate();

  if (!order) {
    return <p>No order details found.</p>;
  }

  const cancelOrder = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/order/cancelOrder`,
        { id: order.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.status === "success") {
        alert("Order cancelled successfully.");
        navigate("/display");
      } else {
        alert(response.data.message || "Failed to cancel order.");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      // setOrders([]); // Set an empty array if there's an error
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
        <strong>Courier:</strong> {order.courier?.name || "Not Assigned"}
      </p>
      <p>
        <strong>Status:</strong> {order.orderStatus}
      </p>
      {order.orderStatus === "Pending" && (
        <button
          onClick={cancelOrder}
          style={{ marginTop: "20px", color: "white", backgroundColor: "red" }}
        >
          Cancel Order
        </button>
      )}
    </div>
  );
};

export default OrderDetails;
