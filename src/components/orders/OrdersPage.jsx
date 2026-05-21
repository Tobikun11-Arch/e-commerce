import React, { useState } from 'react';
import OrderTable from './OrderTable';

const OrdersPage = () => {
  const data7Days = {
    revenue: "₱45,200",
    totalOrders: 124,
    ordersList: [
      { id: "ORD-001", product: "Wireless Earbuds", customer: "Juan Dela Cruz", total: "₱1,200", status: "Shipped" },
      { id: "ORD-002", product: "Mechanical Keyboard", customer: "Maria Clara", total: "₱3,500", status: "Processing" },
      { id: "ORD-003", product: "Gaming Mouse", customer: "Jose Rizal", total: "₱1,800", status: "Delivered" }
    ]
  };

  const data30Days = {
    revenue: "₱180,500",
    totalOrders: 512,
    ordersList: [
      { id: "ORD-099", product: "Smart TV 50-inch", customer: "Andres Bonifacio", total: "₱25,000", status: "Delivered" },
      { id: "ORD-100", product: "Laptop Stand", customer: "Emilio Aguinaldo", total: "₱850", status: "Cancelled" },

    ]
  };

  const [timeRange, setTimeRange] = useState('7days');
  
  const handleToggleData = (range) => {
    setTimeRange(range);
    console.log(`UI Update: Switched dashboard view to ${range}`);
  };

  const currentData = timeRange === '7days' ? data7Days : data30Days;

  return (
    <div style={{ padding: '20px', fontFamily: 'Inter, Arial, sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <h1 style={{ color: '#333' }}>Store Overview</h1>
      <p style={{ color: '#666', marginTop: '-10px' }}>E-Commerce UI Blueprint</p>

      {/* Dashboard Controls */}
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => handleToggleData('7days')} 
          style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: timeRange === '7days' ? '#007bff' : '#ccc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Last 7 Days
        </button>
        <button 
          onClick={() => handleToggleData('30days')} 
          style={{ padding: '8px 16px', backgroundColor: timeRange === '30days' ? '#007bff' : '#ccc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Last 30 Days
        </button>
      </div>

      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', flex: 1 }}>
          <h3 style={{ margin: 0, color: '#888', fontSize: '14px' }}>Total Revenue</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0 0 0' }}>{currentData.revenue}</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', flex: 1 }}>
          <h3 style={{ margin: 0, color: '#888', fontSize: '14px' }}>Total Orders</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0 0 0' }}>{currentData.totalOrders}</p>
        </div>
      </div>

      <RecentOrdersTable orders={currentData.ordersList} />
    </div>
  );
};

export default OrdersPage;