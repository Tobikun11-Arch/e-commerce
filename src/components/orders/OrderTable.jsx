import React, { useState } from "react";

export default function OrderTable({ orders = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = (orders || []).filter((order) =>
    order.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (order) => {
    alert(`Viewing details for: ${order.productName}`);
    console.log(order);
  };

  return (
    <div>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Filter Product Name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      {/* Conditional rendering */}
      {filteredOrders.length > 0 ? (
        <table className="w-full border-collapse border text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Product Name</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Order Date & Time</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border p-2 text-left">{order.productName}</td>
                <td className="border p-2">{order.quantity}</td>
                <td className="border p-2">₱{order.amount}</td>
                <td className="border p-2">{order.dateTime}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleViewDetails(order)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders available.</p>
      )}
    </div>
  );
}
