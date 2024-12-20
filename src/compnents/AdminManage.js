import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [courierEmails, setCourierEmails] = useState({});

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/admin/getAllOrders`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Fetched orders:", response.data);
      setOrders(Array.isArray(response.data.data) ? response.data.data : []);
    } catch (error) {
      console.error(
        "Error fetching orders:",
        error.response?.data || error.message
      );
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/admin/deleteOrder`, {
        data: { id: orderId },
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(orders.filter((order) => order.id !== orderId));
      alert("Order deleted successfully");
      fetchOrders();
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/admin/orderStatusControl`,
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
      fetchOrders();
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const assignCourier = async (orderId) => {
    try {
      const token = localStorage.getItem("authToken");
      const courierEmail = courierEmails[orderId];
      if (!courierEmail) {
        alert("Please enter a courier email");
        return;
      }

      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/admin/assignOrder`,
        { id: orderId, email: courierEmail },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(`Courier assigned successfully to order #${orderId}`);
      fetchOrders();
      setCourierEmails((prev) => ({ ...prev, [orderId]: "" }));
    } catch (error) {
      console.error("Error assigning courier:", error);
    }
  };

  const handleCourierEmailChange = (orderId, email) => {
    setCourierEmails((prev) => ({ ...prev, [orderId]: email }));
  };

  return (
    <div className="manage-orders-page">
      <h2>Manage Orders</h2>
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders available to manage.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="order-item">
              <h3>Order #{order.id}</h3>
              <p>
                <strong>Customer:</strong> {order.user?.name || "Unknown"}
              </p>
              <p>
                <strong>Package Details:</strong> {order.packageDetails}
              </p>
              <p>
                <strong>Status:</strong> {order.orderStatus}
              </p>
              <p>
                <strong>Courier:</strong>{" "}
                {order.courier?.name || "Not Assigned"}
              </p>
              {order.orderStatus != "Refused" &&
                order.orderStatus != "Delivered" && (
                  <div>
                    <select
                      onChange={(e) =>
                        updateOrderStatus(order.id, e.target.value)
                      }
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
              <div>
                {order.orderStatus != "Refused" &&
                  order.orderStatus != "Delivered" && (
                    <input
                      type="email"
                      placeholder="Enter courier email"
                      value={courierEmails[order.id] || ""}
                      onChange={(e) =>
                        handleCourierEmailChange(order.id, e.target.value)
                      }
                    />
                  )}
                {order.orderStatus != "Refused" &&
                  order.orderStatus != "Delivered" && (
                    <button onClick={() => assignCourier(order.id)}>
                      Assign Courier
                    </button>
                  )}
                <button
                  onClick={() => deleteOrder(order.id)}
                  style={{
                    marginTop: "20px",
                    color: "white",
                    backgroundColor: "red",
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageOrdersPage;
