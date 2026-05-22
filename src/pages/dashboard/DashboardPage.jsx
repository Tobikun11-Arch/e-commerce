import DashboardStats from '../../components/dashboard/DashboardStats';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-lg font-semibold text-slate-900 sm:text-xl">
          Overview
        </h1>
      </section>

      <DashboardStats />
    </div>
  );
}
