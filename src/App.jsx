import { useState } from "react"
import Header from "./components/layout/Header"
import Sidebar from "./components/layout/Sidebar"
import ProductsPage from "./components/products/ProductsPage"
import OrdersPage from "./components/orders/OrdersPage"

export default function App() {
  const [activeItem, setActiveItem] = useState("Dashboard")

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="fixed inset-x-0 top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <Header />
      </div>

      <div className="pt-20 flex">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <main className="flex-1 p-6">
          {activeItem === "Dashboard" && <div>Dashboard Content</div>}
          {activeItem === "Products" && <ProductsPage />}
          {activeItem === "Orders" && <OrdersPage />}
          {activeItem === "Settings" && <div>Settings Content</div>}
        </main>
      </div>
    </div>
  )
}
