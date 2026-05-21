import React, { useState } from "react";
import OrderTable from "./OrderTable";

const dummyOrders = [
  { productName: "Car Vacuum Cleaner", quantity: 8, amount: 211.13, dateTime: "February 06, 2025 at 1:51 PM" },
  { productName: "Slim Fit Men's Blazer", quantity: 21, amount: 2302.65, dateTime: "February 06, 2025 at 2:10 PM" },
  { productName: "Smartphone Stand With Wireless Charger", quantity: 5, amount: 153.0, dateTime: "February 07, 2025 at 9:47 AM" },
  { productName: "Wireless Bluetooth Headphones", quantity: 22, amount: 1682.81, dateTime: "February 07, 2025 at 12:36 PM" },
  { productName: "Organic Face Serum", quantity: 4, amount: 165.60, dateTime: "February 07, 2025 at 12:36 PM" },
  { productName: "Organic Face Serum", quantity: 1, amount: 41.40, dateTime: "February 07, 2025 at 3:06 PM" },
  { productName: "Smartphone Stand With Wireless Charger", quantity: 1, amount: 34.0, dateTime: "February 09, 2025 at 5:19 PM" },
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
