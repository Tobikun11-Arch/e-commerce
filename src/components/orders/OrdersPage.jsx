import React from "react";
import OrderTable from "./OrderTable";

export default function OrdersPage() {
  // Dummy data for 10 clothing brand products
  const orders = [
    {
      productName: "Classic White T-Shirt",
      quantity: 12,
      amount: 899.0,
      dateTime: "May 20, 2026 at 10:15 AM",
    },
    {
      productName: "Oversized Black Tee",
      quantity: 7,
      amount: 1299.0,
      dateTime: "May 21, 2026 at 2:45 PM",
    },
    {
      productName: "Graphic Print Hoodie",
      quantity: 5,
      amount: 2499.0,
      dateTime: "May 21, 2026 at 4:30 PM",
    },
    {
      productName: "Denim Jacket",
      quantity: 3,
      amount: 3499.0,
      dateTime: "May 22, 2026 at 11:00 AM",
    },
    {
      productName: "Polo Shirt",
      quantity: 10,
      amount: 1599.0,
      dateTime: "May 22, 2026 at 1:20 PM",
    },
    {
      productName: "Striped Long Sleeve Tee",
      quantity: 8,
      amount: 1399.0,
      dateTime: "May 23, 2026 at 9:00 AM",
    },
    {
      productName: "Vintage Band T-Shirt",
      quantity: 6,
      amount: 1799.0,
      dateTime: "May 23, 2026 at 3:15 PM",
    },
    {
      productName: "Athletic Dry-Fit Shirt",
      quantity: 15,
      amount: 2099.0,
      dateTime: "May 24, 2026 at 12:00 PM",
    },
    {
      productName: "Tie-Dye Tee",
      quantity: 9,
      amount: 1499.0,
      dateTime: "May 24, 2026 at 5:30 PM",
    },
    {
      productName: "Collared Henley Shirt",
      quantity: 4,
      amount: 1899.0,
      dateTime: "May 25, 2026 at 10:45 AM",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <OrderTable orders={orders} />
    </div>
  );
}
