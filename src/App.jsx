import Sidebar from "./components/layout/Sidebar"
import { useState } from "react"
import ProductsPage from "./components/products/ProductsPage"

export default function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="flex">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      {activeItem === "Dashboard" && <div className="ml-72">Dashboard Content</div>}
      {activeItem === "Products" && <ProductsPage />}
      {activeItem === "Orders" && <div className="ml-72">Orders Content</div>}
    </div>
  )
}
