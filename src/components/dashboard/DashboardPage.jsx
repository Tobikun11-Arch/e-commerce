import DashboardStats from "./DashboardStats";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-xl font-semibold text-slate-900">Overview</h1>
      </section>

      <DashboardStats />
    </div>
  );
}
