export default function Sidebar({ activeItem, setActiveItem }) {
  return (
    <div className="w-55 h-auto bg-gray-200 p-4">
      <ul className="space-y-2">
        <li
          onClick={() => setActiveItem("Dashboard")}
          className={`cursor-pointer rounded-xl px-4 py-3 transition ${activeItem === "Dashboard" ? "bg-blue-500 text-white" : "hover:bg-gray-300"}`}
        >
          Dashboard
        </li>
        <li
          onClick={() => setActiveItem("Products")}
          className={`cursor-pointer rounded-xl px-4 py-3 transition ${activeItem === "Products" ? "bg-blue-500 text-white" : "hover:bg-gray-300"}`}
        >
          Products
        </li>
        <li
          onClick={() => setActiveItem("Orders")}
          className={`cursor-pointer rounded-xl px-4 py-3 transition ${activeItem === "Orders" ? "bg-blue-500 text-white" : "hover:bg-gray-300"}`}
        >
          Orders
        </li>
        <li
          onClick={() => setActiveItem("Settings")}
          className={`cursor-pointer rounded-xl px-4 py-3 transition ${activeItem === "Settings" ? "bg-blue-500 text-white" : "hover:bg-gray-300"}`}
        >
          Settings
        </li>
      </ul>
    </div>
  )
}
