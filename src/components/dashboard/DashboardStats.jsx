import { stats, tshirts, orders } from "../../data/database.js";

function StatCard({ title, value, note, delta, deltaType }) {
  const deltaClasses =
    deltaType === "positive"
      ? "bg-emerald-100 text-emerald-700"
      : deltaType === "negative"
      ? "bg-rose-100 text-rose-700"
      : "bg-slate-100 text-slate-700";

  return (
    <div className="rounded-3xl bg-white p-5 shadow-md hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">{value}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${deltaClasses}`}>
          {delta}
        </span>
      </div>
      <p className="mt-3 text-sm text-slate-500">{note}</p>
    </div>
  );
}

function SalesChart() {
  const months = ["Oct", "Nov", "Dec", "Jan", "Feb"];
  const values = [0, 0, 0, 200, 3900];
  const width = 920, height = 300, pad = 40;
  const max = Math.max(...values);
  const step = (width - pad * 2) / (months.length - 1);
  const points = values.map((v, i) => `${pad + i * step},${pad + (1 - v / max) * (height - pad * 2)}`).join(" ");

  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">
      <h3 className="mb-4 text-sm font-medium text-slate-600">Sales</h3>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%">
        <defs>
          <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <line key={i} x1={pad} x2={width - pad} y1={pad + i * (height - pad * 2) / 4} y2={pad + i * (height - pad * 2) / 4} stroke="#e6e9ee" />
        ))}
        <polygon points={`${pad},${height - pad} ${points} ${width - pad},${height - pad}`} fill="url(#grad)" />
        <polyline points={points} fill="none" stroke="#2dd4bf" strokeWidth="3" />
        {values.map((v, i) => {
          const x = pad + i * step;
          const y = pad + (1 - v / max) * (height - pad * 2);
          return <circle key={i} cx={x} cy={y} r={4} fill="#fff" stroke="#2dd4bf" strokeWidth={2} />;
        })}
        {months.map((m, i) => (
          <text key={m} x={pad + i * step} y={height - 8} fontSize="12" textAnchor="middle" fill="#475569">{m}</text>
        ))}
      </svg>
    </div>
  );
}

function LatestOrders() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Latest Orders</h3>
      <div className="space-y-4">
        {orders.map((o) => (
          <div key={o.title} className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src={o.image} alt={o.title} className="w-12 h-12 rounded object-cover" />
              <div>
                <p className="text-sm font-medium text-slate-900">{o.title}</p>
                <p className="text-xs text-slate-500">{o.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-900">x{o.qty}</p>
              <p className="text-sm font-semibold text-slate-900">{o.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopSellingProducts() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-md">
      <h2 className="text-lg font-semibold text-slate-800 mb-4">Top Selling Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {tshirts.map((item) => (
          <div key={item.name} className="rounded-xl bg-white p-4 shadow-lg hover:shadow-md transition">
            <img src={item.image} alt={item.name} className="w-full h-auto object-cover rounded-lg mb-3" />
            <p className="text-sm font-semibold text-slate-900">{item.name}</p>
            <p className="text-xs text-slate-500">{item.sold}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function DashboardStats() {
  return (
    <div className="space-y-8">
      {/* Stats */}
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => <StatCard key={item.title} {...item} />)}
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <div className="md:col-span-2"><SalesChart /></div>
        <LatestOrders />
      </section>

      <TopSellingProducts />
    </div>
  );
}