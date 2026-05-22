import logo from "/assets/source-apparel.png";

export default function Header({onMenuClick}) {
  return (
    <header className="flex h-16 items-center justify-between gap-3 bg-white px-3 shadow sm:h-20 sm:px-4">
      <div className="flex min-w-0 items-center gap-2">
        <button
          type="button"
          onClick={onMenuClick}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 lg:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>
        <img
          src={logo}
          alt="Source Apparel logo"
          className="h-auto w-24 sm:w-44 lg:w-56 mt-2.5"
        />
      </div>

      <div className="flex min-w-0 items-center gap-2 sm:gap-4">
        <button
          type="button"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 sm:h-12 sm:w-12 sm:rounded-2xl"
          aria-label="Messages"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H7l-5 3V5z" />
          </svg>
        </button>

        <button
          type="button"
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 sm:h-12 sm:w-12 sm:rounded-2xl"
          aria-label="Notifications"
        >
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[11px] font-semibold text-white">
            3
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2a6 6 0 00-6 6v4.586l-.707.707A1 1 0 005 15h14a1 1 0 00.707-1.707L18 12.586V8a6 6 0 00-6-6zm0 18a3 3 0 003-3H9a3 3 0 003 3z" />
          </svg>
        </button>

        <div className="flex min-w-0 items-center gap-2 rounded-2xl py-2 sm:gap-3 sm:px-3">
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">Nung Kodak</p>
            <p className="text-xs text-slate-600">Seller</p>
          </div>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-blue-600 sm:h-10 sm:w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
