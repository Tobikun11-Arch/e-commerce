import React from "react";

export default function OrderTable({ orders, onView, searchTerm, onSearch }) {
  const filteredOrders = orders.filter(order =>
    order.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Filter Product Name..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredOrders.length === 0 ? (
        <p className="text-gray-500">No matching orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Product Name</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Quantity</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Amount</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Order Date & Time</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{order.productName}</td>
                  <td className="px-4 py-2">{order.quantity}</td>
                  <td className="px-4 py-2">${order.amount}</td>
                  <td className="px-4 py-2">{order.dateTime}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => onView(order)}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
