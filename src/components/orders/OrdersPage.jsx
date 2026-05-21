import React from "react";

export default function OrderTable({ orders, onView, searchTerm, onSearch }) {
  const filteredOrders = orders.filter(order =>
    order.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
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
                <th className="px-4 py-2 text-sm font-semibold text-gray-700 text-left">Product</th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-700 text-center">Quantity</th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-700 text-center">Amount</th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-700 text-center">Order Date & Time</th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-700 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
           
                  <td className="px-4 py-2 flex items-center space-x-2">
                    <img
                      src={order.image}
                      alt={order.productName}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <span>{order.productName}</span>
                  </td>
                
                  <td className="px-4 py-2 text-center">{order.quantity}</td>
                  <td className="px-4 py-2 text-center">₱{order.amount}</td>
                  <td className="px-4 py-2 text-center">{order.dateTime}</td>
                  <td className="px-4 py-2 text-center">
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

