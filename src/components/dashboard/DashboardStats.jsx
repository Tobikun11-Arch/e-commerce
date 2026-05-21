import { stats, tshirts, orders } from "../../data/database.js";

function StatCard({ title, value, note, delta, deltaType }) {
  const deltaClasses =
    deltaType === "positive"
      ? "bg-emerald-100 text-emerald-700"
      : deltaType === "negative"
      ? "bg-rose-100 text-rose-700"
      : "bg-slate-100 text-slate-700";

  return (
    <div className="rounded-3xl border bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between">
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
  const months = ["October", "November", "December", "January", "February"];
  const values = [0, 0, 0, 200, 3900];

  const width = 920;
  const height = 300;
  const padding = 40;

  const max = Math.max(...values) || 1;
  const xStep = (width - padding * 2) / (months.length - 1);

  const points = values
    .map((v, i) => {
      const x = padding + i * xStep;
      const y = padding + (1 - v / max) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm h-full">
      <h3 className="mb-4 text-sm font-medium text-slate-600">Sales</h3>
      <div className="overflow-hidden h-full">
        <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="lineGrad2" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {Array.from({ length: 5 }).map((_, i) => {
            const t = i / 4;
            return (
              <line
                key={i}
                x1={padding}
                x2={width - padding}
                y1={padding + t * (height - padding * 2)}
                y2={padding + t * (height - padding * 2)}
                stroke="#e6e9ee"
                strokeWidth="1"
              />
            );
          })}

          <polygon points={`${padding},${height - padding} ${points} ${width - padding},${height - padding}`} fill="url(#lineGrad2)" />

          <polyline points={points} fill="none" stroke="#2dd4bf" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />

          {values.map((v, i) => {
            const x = padding + i * xStep;
            const y = padding + (1 - v / max) * (height - padding * 2);
            return <circle key={i} cx={x} cy={y} r={4} fill="#fff" stroke="#2dd4bf" strokeWidth={2} />;
          })}

          {months.map((m, i) => (
            <text key={m} x={padding + i * xStep} y={height - 8} fontSize="12" textAnchor="middle" fill="#475569">
              {m}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}

function LatestOrders() {

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm h-full">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Latest Orders</h3>
      <div className="space-y-4">
        {orders.map((o) => (
          <div key={o.title} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={o.image} alt={o.title} className="w-12 h-12 object-cover rounded" />
              <div>
                <div className="text-sm font-medium text-slate-900">{o.title}</div>
                <div className="text-xs text-slate-500">{o.date}</div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-slate-900">x{o.qty}</div>
              <div className="text-sm font-semibold text-slate-900">{o.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopSellingProducts() {
  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-800 mb-4">Top Selling Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {tshirts.map((item) => (
          <div key={item.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
            <img src={item.image} alt={item.name} className="w-full h-auto object-cover object-center rounded-lg mb-3" />
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
      {/* Stats Section */}
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </section>

      {/* Chart + Latest Orders */}
      <section className="grid gap-5 md:grid-cols-3">
        <div className="md:col-span-2">
          <SalesChart />
        </div>
        <div className="md:col-span-1">
          <LatestOrders />
        </div>
      </section>

      {/* Top Selling Products Section */}
      <TopSellingProducts />
    </div>
  );
}