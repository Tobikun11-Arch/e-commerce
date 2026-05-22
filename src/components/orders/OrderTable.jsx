import {useState} from 'react';

export default function OrderTable({orders = []}) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = (orders || []).filter(order =>
    order.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = order => {
    alert(`Viewing details for: ${order.productName}`);
    console.log(order);
  };

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
      <input
        type="text"
        placeholder="Filter Product Name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="mb-4 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />

      {filteredOrders.length > 0 ? (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-[720px] w-full border-collapse text-sm">
            <thead className="bg-gray-50 text-left text-gray-500">
              <tr>
                <th className="px-4 py-3 font-medium">Product Name</th>
                <th className="px-4 py-3 text-center font-medium">Quantity</th>
                <th className="px-4 py-3 text-center font-medium">Amount</th>
                <th className="px-4 py-3 font-medium">Order Date & Time</th>
                <th className="px-4 py-3 text-center font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium text-gray-800">
                    {order.productName}
                  </td>
                  <td className="px-4 py-4 text-center text-gray-600">
                    {order.quantity}
                  </td>
                  <td className="px-4 py-4 text-center text-gray-800">
                    ₱{order.amount}
                  </td>
                  <td className="px-4 py-4 text-gray-600">{order.dateTime}</td>
                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => handleViewDetails(order)}
                      className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center text-gray-500">
          No orders available.
        </p>
      )}
    </div>
  );
}
