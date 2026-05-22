import logo from "../../public/assets/source-apparel.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-20 px-4 bg-white shadow">
      <img src={logo} alt="Source Apparel logo" className="w-56 h-auto" />

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 hover:bg-slate-200"
          aria-label="Messages"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H7l-5 3V5z" />
          </svg>
        </button>

        <button
          type="button"
          className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 hover:bg-slate-200"
          aria-label="Notifications"
        >
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[11px] font-semibold text-white">
            3
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a6 6 0 00-6 6v4.586l-.707.707A1 1 0 005 15h14a1 1 0 00.707-1.707L18 12.586V8a6 6 0 00-6-6zm0 18a3 3 0 003-3H9a3 3 0 003 3z" />
          </svg>
        </button>

        <div className="flex items-center gap-3 rounded-2xl px-3 py-2">
          <div>
            <p className="text-sm font-semibold text-slate-900">Nung Kodak</p>
            <p className="text-xs text-slate-600">Seller</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
