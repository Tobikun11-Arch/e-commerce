import React from 'react';

// Requirement: Props usage (receiving orders)
const OrderTable = ({ orders }) => {
  
  // Requirement: Event handling (button click -> alert)
  const handleCheckInventory = (orderId, productName) => {
    alert(`System action: Checking stock for ${productName} (Order: ${orderId})`);
  };

  // Requirement: Conditional rendering
  if (!orders || orders.length === 0) {
    return (
      <div style={{ padding: '40px', backgroundColor: 'white', border: '1px dashed #ccc', textAlign: 'center', color: '#888' }}>
        <h3>No Shirt Orders Found</h3>
        <p>There are currently no transactions to display for this view.</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '20px', border: '1px solid #eee' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', color: '#555', fontSize: '13px', textTransform: 'uppercase' }}>
            <th style={{ padding: '12px 8px', borderBottom: '1px solid #ddd' }}>Order ID</th>
            <th style={{ padding: '12px 8px', borderBottom: '1px solid #ddd' }}>Item Design</th>
            <th style={{ padding: '12px 8px', borderBottom: '1px solid #ddd' }}>Customer</th>
            <th style={{ padding: '12px 8px', borderBottom: '1px solid #ddd' }}>Total</th>
            <th style={{ padding: '12px 8px', borderBottom: '1px solid #ddd' }}>Status</th>
            <th style={{ padding: '12px 8px', borderBottom: '1px solid #ddd' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} style={{ borderBottom: '1px solid #f5f5f5', fontSize: '14px' }}>
              <td style={{ padding: '12px 8px', fontWeight: '600', color: '#333' }}>{order.id}</td>
              <td style={{ padding: '12px 8px' }}>{order.product}</td>
              <td style={{ padding: '12px 8px' }}>{order.customer}</td>
              <td style={{ padding: '12px 8px' }}>{order.total}</td>
              <td style={{ padding: '12px 8px' }}>
                <span style={{ 
                  padding: '4px 10px', 
                  borderRadius: '20px', 
                  fontSize: '11px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  backgroundColor: order.status === 'Delivered' ? '#e6f4ea' : order.status === 'Cancelled' ? '#fce8e6' : '#fef7e0',
                  color: order.status === 'Delivered' ? '#137333' : order.status === 'Cancelled' ? '#c5221f' : '#b08d00'
                }}>
                  {order.status}
                </span>
              </td>
              <td style={{ padding: '12px 8px' }}>
                <button 
                  onClick={() => handleCheckInventory(order.id, order.product)}
                  style={{ padding: '6px 12px', backgroundColor: 'transparent', border: '1px solid #333', color: '#333', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
                >
                  View Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;