export default function Sidebar({ activeItem, setActiveItem }   ) {
    return (
        <div className="w-64 h-screen bg-gray-200 p-4">
            <ul>
                <li onClick={() => setActiveItem("Dashboard")} className={activeItem === "Dashboard" ? "bg-blue-500 text-white" : "hover:bg-gray-300"}>Dashboard</li>
                <li onClick={() => setActiveItem("Products")} className={activeItem === "Products" ? "bg-blue-500 text-white" : "hover:bg-gray-300"}>Products</li>
                <li onClick={() => setActiveItem("Orders")} className={activeItem === "Orders" ? "bg-blue-500 text-white" : "hover:bg-gray-300"}>Orders</li>
                <li onClick={() => setActiveItem("Settings")} className={activeItem === "Settings" ? "bg-blue-500 text-white" : "hover:bg-gray-300"}>Settings</li>
            </ul>
        </div>
    )
}