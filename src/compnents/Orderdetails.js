/*import React, { useEffect, useState } from 'react';

const OrderDetails = ({ orderId }) => {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch order details based on orderId
        fetch(/api/orders/${orderId})
            .then(response => response.json())
            .then(data => {
                setOrder(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching order details:', error));
    }, [orderId]);

    const handleCancelOrder = () => {
        // Check if order is pending and can be canceled
        if (order.status === 'Pending') {
            fetch(/api/orders/${orderId}/cancel, { method: 'POST' })
                .then(response => response.json())
                .then(data => {
                    alert('Order canceled successfully');
                    setOrder({ ...order, status: 'Canceled' });
                })
                .catch(error => console.error('Error canceling order:', error));
        } else {
            alert('Order cannot be canceled');
        }
    };

    if (loading) return <p>Loading order details...</p>;

    return (
        <div>
            <h2>Order Details</h2>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Pickup Location:</strong> {order.pickupLocation}</p>
            <p><strong>Delivery Location:</strong> {order.deliveryLocation}</p>
            <p><strong>Package Details:</strong> {order.packageDetails}</p>
            <p><strong>Courier Info:</strong> {order.courierInfo}</p>
            <p><strong>Status:</strong> {order.status}</p>

            {order.status === 'Pending' && (
                <button onClick={handleCancelOrder}>Cancel Order</button>
            )}
        </div>
    );
};

export default OrderDetails; */
