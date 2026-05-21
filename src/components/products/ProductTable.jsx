import React from "react";

const ProductTable = ({ type }) => {
  const products = [
    {
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      price: "$89.99",
      discount: "15%",
      stock: 178,
      status: "published",
    },
    {
      name: "Smart Air Purifier",
      category: "Home & Kitchen",
      price: "$199.99",
      discount: "10%",
      stock: 50,
      status: "published",
    },
  ];

  return (
    <div className="bg-white shadow rounded p-6">
      <h3 className="text-lg font-semibold mb-4">
        {type === "manage" ? "Manage Products" : "Inventory"}
      </h3>

      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search Product Name or ID..."
          className="border rounded px-3 py-2 w-1/3"
        />
        <button className="border rounded px-4 py-2 hover:bg-gray-100">
          Filter
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Discount</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.category}</td>
              <td className="border p-2">{p.price}</td>
              <td className="border p-2">{p.discount}</td>
              <td
                className={`border p-2 ${
                  p.stock < 100 ? "text-red-500" : "text-gray-700"
                }`}
              >
                {p.stock}
              </td>
              <td className="border p-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">
                  {p.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
