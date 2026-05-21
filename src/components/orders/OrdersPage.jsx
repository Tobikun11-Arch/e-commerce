import { useState } from "react";
import OrderTable from "./OrderTable";
 
const MOCK_ORDERS = [
  { id: "ORD-0091", customer: "Jamie Reyes", email: "jamie@example.com", date: "May 20, 2026", items: 3, total: 128.5, status: "Pending" },
  { id: "ORD-0090", customer: "Maria Lim", email: "maria@example.com", date: "May 19, 2026", items: 7, total: 340.0, status: "Processing" },
  { id: "ORD-0089", customer: "Kevin Torres", email: "kevin@example.com", date: "May 18, 2026", items: 2, total: 59.99, status: "Delivered" },
  { id: "ORD-0088", customer: "Sofia Aquino", email: "sofia@example.com", date: "May 17, 2026", items: 1, total: 22.0, status: "Cancelled" },
  { id: "ORD-0087", customer: "David Chen", email: "david@example.com", date: "May 16, 2026", items: 5, total: 215.75, status: "Delivered" },
];
 
const STATS = [
  { label: "Total Orders", value: "1,284", delta: "+12% this month", up: true },
  { label: "Pending", value: "48", delta: "Awaiting fulfillment", up: true },
  { label: "Delivered", value: "1,103", delta: "+8% vs last month", up: true },
  { label: "Revenue", value: "$94,210", delta: "+5.3% this month", up: true },
];
 
export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);
 
  const filtered = MOCK_ORDERS.filter((o) => {
    const matchSearch =
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || o.status === statusFilter;
    return matchSearch && matchStatus;
  });
 
  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.topbar}>
        <div>
          <h1 style={styles.title}>Orders</h1>
          <p style={styles.subtitle}>Manage and track all customer orders</p>
        </div>
        <div style={styles.actions}>
          <button style={styles.btn}>⬇ Export</button>
          <button style={{ ...styles.btn, ...styles.btnPrimary }}>+ New Order</button>
        </div>
      </div>
 
      {/* Stat Cards */}
      <div style={styles.statsGrid}>
        {STATS.map((s) => (
          <div key={s.label} style={styles.statCard}>
            <div style={styles.statLabel}>{s.label.toUpperCase()}</div>
            <div style={styles.statValue}>{s.value}</div>
            <div style={{ ...styles.statDelta, color: s.up ? "#3B6D11" : "#A32D2D" }}>
              {s.delta}
            </div>
          </div>
        ))}
      </div>
 
      {/* Table Card */}
      <div style={styles.tableCard}>
        {/* Toolbar */}
        <div style={styles.toolbar}>
          <div style={styles.searchWrap}>
            <span style={styles.searchIcon}>🔍</span>
            <input
              style={styles.searchInput}
              type="text"
              placeholder="Search orders…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            style={styles.select}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {["All", "Pending", "Processing", "Delivered", "Cancelled"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <select style={styles.select}>
            {["All time", "Today", "This week", "This month"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
 
        {/* Table */}
        <OrderTable
          orders={filtered}
          page={page}
          totalOrders={1284}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
 