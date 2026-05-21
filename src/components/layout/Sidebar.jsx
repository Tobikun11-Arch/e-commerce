export default function Sidebar({ activeItem, setActiveItem }) {
  const items = ["Dashboard", "Products", "Orders", "Settings"];

  return (
    <aside className="w-55 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto bg-gray-200 p-4">
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            onClick={() => setActiveItem(item)}
            className={`cursor-pointer rounded-xl px-4 py-3 transition ${
              activeItem === item
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-300"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
