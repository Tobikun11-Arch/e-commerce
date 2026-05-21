import DashboardStats from "./DashboardStats"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-1xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="mt text-1xl font-semibold text-slate-900">Overview</h1>
          </div> 
        </div>
      </section>

      <DashboardStats />
    </div>
  )
}
