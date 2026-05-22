export default function Sidebar({activeItem, setActiveItem, isOpen, onClose}) {
  const items = ['Dashboard', 'Products', 'Orders', 'Settings'];
  const handleItemClick = item => {
    setActiveItem(item);
    onClose();
  };

  return (
    <>
      <aside
        className={`fixed inset-x-0 top-0 z-40 h-screen w-full shrink-0 overflow-y-auto bg-white p-6 transition-transform duration-300 lg:sticky lg:top-20 lg:z-0 lg:h-[calc(100vh-5rem)] lg:w-56 lg:bg-gray-200 lg:p-4 lg:translate-x-0 ${
          isOpen ? 'translate-y-0' : '-translate-y-full lg:translate-y-0'
        }`}
      >
        <button
          type="button"
          className="mb-16 text-4xl leading-none text-slate-700 lg:hidden"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button>
        <ul className="flex flex-col items-center gap-8 lg:block lg:space-y-2">
          {items.map(item => (
            <li
              key={item}
              onClick={() => handleItemClick(item)}
              className={`cursor-pointer rounded-xl px-6 py-2 text-center text-2xl transition lg:px-4 lg:py-3 lg:text-left lg:text-sm ${
                activeItem === item
                  ? 'font-semibold text-slate-950 lg:bg-blue-500 lg:text-white'
                  : 'text-slate-600 hover:text-slate-950 lg:text-slate-950 lg:hover:bg-gray-300'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
