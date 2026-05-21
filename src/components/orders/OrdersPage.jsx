import React, { useState } from 'react';
import OrderTable from './OrderTable';

const OrdersPage = () => {
  // Dummy data tailored for a T-Shirt Brand
  const data7Days = [
    { id: "TEE-001", product: "Oversized K-Drama Statement Tee", customer: "Bea Alonzo", total: "₱550", status: "Shipped" },
    { id: "TEE-002", product: "Smash & Clear Badminton Dri-Fit", customer: "Juan Gomez", total: "₱450", status: "Processing" },
    { id: "TEE-003", product: "Classic INFJ Minimalist Top", customer: "Clara Santos", total: "₱600", status: "Delivered" }
  ];

  const data30Days = [
    { id: "TEE-089", product: "Vintage Daily Planet Graphic Shirt", customer: "Mark Reyes", total: "₱750", status: "Delivered" },
    { id: "TEE-090", product: "19th Century Chess Club Hoodie", customer: "Elena Cruz", total: "₱1,200", status: "Cancelled" },
    { id: "TEE-091", product: "Stark Industries Polo Shirt", customer: "Tony Bautista", total: "₱850", status: "Delivered" },
    { id: "TEE-092", product: "Basic Code Logo Tee", customer: "Jose Rizal", total: "₱350", status: "Processing" }
  ];

  // Requirement: useState (UI toggle for Time Range)
  const [timeRange, setTimeRange] = useState('7days');
  
  // Requirement: Event handling
  const handleToggleData = (range) => {
    setTimeRange(range);
    console.log(`UI Update: Switched to ${range} orders`);
  };

  const currentOrders = timeRange === '7days' ? data7Days : data30Days;

  return (
    <div style={{ padding: '20px', fontFamily: 'Inter, Arial, sans-serif', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <h1 style={{ color: '#222' }}>Shirt Orders Management</h1>
      <p style={{ color: '#666', marginTop: '-10px' }}>UI Blueprint - Static Interface Only</p>

      {/* UI Toggles */}
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => handleToggleData('7days')} 
          style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: timeRange === '7days' ? '#333' : '#ddd', color: timeRange === '7days' ? 'white' : '#333', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          View Last 7 Days
        </button>
        <button 
          onClick={() => handleToggleData('30days')} 
          style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: timeRange === '30days' ? '#333' : '#ddd', color: timeRange === '30days' ? 'white' : '#333', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          View Last 30 Days
        </button>
        <button 
          onClick={() => handleToggleData('empty')} 
          style={{ padding: '8px 16px', backgroundColor: timeRange === 'empty' ? '#333' : '#ddd', color: timeRange === 'empty' ? 'white' : '#333', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Simulate Empty State
        </button>
      </div>

      {/* Requirement: Props usage (passing dummy data) */}
      <OrderTable orders={timeRange === 'empty' ? [] : currentOrders} />
    </div>
  );
};

export default OrdersPage;