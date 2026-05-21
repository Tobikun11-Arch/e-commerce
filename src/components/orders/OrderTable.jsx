import React, { useState } from "react";
import OrderTable from "./OrderTable";

const dummyOrders = [
  {
    productName: "Classic White T-Shirt",
    quantity: 12,
    amount: 899.00,
    dateTime: "May 20, 2026 at 10:15 AM",
    image: "/assets/tshirt-white.png",
  },
  {
    productName: "Graphic Print Hoodie",
    quantity: 7,
    amount: 3499.00,
    dateTime: "May 20, 2026 at 11:30 AM",
    image: "/assets/hoodie-graphic.png",
  },
  {
    productName: "Denim Jacket",
    quantity: 5,
    amount: 4999.00,
    dateTime: "May 21, 2026 at 2:45 PM",
    image: "/assets/jacket-denim.png",
  },
  {
    productName: "Black Polo Shirt",
    quantity: 9,
    amount: 1799.00,
    dateTime: "May 21, 2026 at 4:20 PM",
    image: "/assets/polo-black.png",
  },
  {
    productName: "Oversized Cotton Tee",
    quantity: 15,
    amount: 1299.00,
    dateTime: "May 22, 2026 at 9:00 AM",
    image: "/assets/tshirt-oversized.png",
  },
];

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleViewDetails = (order) => {
    alert(`Viewing details for: ${order.productName}`);
    console.log(order);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Orders Content</h2>

      <OrderTable
        orders={dummyOrders}
        onView={handleViewDetails}
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />
    </div>
  );
}
