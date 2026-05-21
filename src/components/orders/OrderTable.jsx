
const STATUS_STYLES = {
  Pending:    { background: "#FAEEDA", color: "#633806" },
  Processing: { background: "#E6F1FB", color: "#0C447C" },
  Delivered:  { background: "#EAF3DE", color: "#27500A" },
  Cancelled:  { background: "#FCEBEB", color: "#791F1F" },
};
 
const AVATAR_COLORS = [
  { bg: "#E6F1FB", color: "#0C447C" },
  { bg: "#E1F5EE", color: "#085041" },
  { bg: "#FAEEDA", color: "#633806" },
  { bg: "#FBEAF0", color: "#72243E" },
  { bg: "#EEEDFE", color: "#3C3489" },
];
 
function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase();
}
 
function Avatar({ name, index }) {
  const { bg, color } = AVATAR_COLORS[index % AVATAR_COLORS.length];
  return (
    <div style={{ ...styles.avatar, background: bg, color }}>
      {getInitials(name)}
    </div>
  );
}
 
function StatusBadge({ status }) {
  const s = STATUS_STYLES[status] || STATUS_STYLES.Pending;
  return (
    <span style={{ ...styles.badge, ...s }}>
      <span style={{ ...styles.badgeDot, background: s.color }} />
      {status}
    </span>
  );
}
 
export default function OrderTable({ orders = [], page = 1, totalOrders = 0, onPageChange }) {
  const ROWS_PER_PAGE = 5;
  const totalPages = Math.ceil(totalOrders / ROWS_PER_PAGE);
  const start = (page - 1) * ROWS_PER_PAGE + 1;
  const end = Math.min(page * ROWS_PER_PAGE, totalOrders);
 
  const visiblePages = [1, 2, 3];
 
  return (
    <>
      <table style={styles.table}>
        <thead>
          <tr>
            {["Order ID", "Customer", "Date", "Items", "Total", "Status", ""].map((h) => (
              <th key={h} style={styles.th}>{h.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan={7} style={styles.empty}>No orders found.</td>
            </tr>
          ) : (
            orders.map((order, i) => (
              <tr key={order.id} style={styles.row}>
                <td style={styles.td}>
                  <span style={styles.orderId}>#{order.id}</span>
                </td>
                <td style={styles.td}>
                  <div style={styles.customerCell}>
                    <Avatar name={order.customer} index={i} />
                    <div>
                      <div style={styles.customerName}>{order.customer}</div>
                      <div style={styles.customerEmail}>{order.email}</div>
                    </div>
                  </div>
                </td>
                <td style={{ ...styles.td, color: "#888" }}>{order.date}</td>
                <td style={{ ...styles.td, textAlign: "center" }}>{order.items}</td>
                <td style={{ ...styles.td, fontWeight: 500 }}>
                  ${order.total.toFixed(2)}
                </td>
                <td style={styles.td}>
                  <StatusBadge status={order.status} />
                </td>
                <td style={{ ...styles.td, textAlign: "right" }}>
                  <div style={styles.rowActions}>
                    <button style={styles.iconBtn} title="View">👁</button>
                    <button style={styles.iconBtn} title="Edit">✏️</button>
                    <button style={styles.iconBtn} title="More">⋯</button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
 
      {/* Pagination */}
      <div style={styles.pagination}>
        <span style={styles.pageInfo}>
          Showing {start}–{end} of {totalOrders.toLocaleString()} orders
        </span>
        <div style={styles.pageBtns}>
          <button
            style={styles.pageBtn}
            onClick={() => onPageChange(Math.max(1, page - 1))}
            disabled={page === 1}
          >
            ‹
          </button>
          {visiblePages.map((p) => (
            <button
              key={p}
              style={{ ...styles.pageBtn, ...(page === p ? styles.pageBtnActive : {}) }}
              onClick={() => onPageChange(p)}
            >
              {p}
            </button>
          ))}
          <span style={styles.ellipsis}>…</span>
          <button style={styles.pageBtn} onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </button>
          <button
            style={styles.pageBtn}
            onClick={() => onPageChange(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
}
 