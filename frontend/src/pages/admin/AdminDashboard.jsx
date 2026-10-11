import { Link } from "react-router-dom";

function AdminDashboard() {
  const stats = [
    { title: "Total Complaints", count: 120, color: "#2563eb" },
    { title: "Submitted", count: 20, color: "#f59e0b" },
    { title: "In Progress", count: 35, color: "#8b5cf6" },
    { title: "Resolved", count: 40, color: "#10b981" },
    { title: "Closed", count: 25, color: "#64748b" }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome to Smart Complaint Management System</p>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "20px" }}>
        {stats.map((stat) => (
          <div
            key={stat.title}
            style={{
              width: "170px",
              padding: "15px",
              borderRadius: "10px",
              backgroundColor: stat.color,
              color: "white"
            }}
          >
            <p style={{ margin: 0 }}>{stat.title}</p>
            <h2 style={{ margin: "10px 0 0 0" }}>{stat.count}</h2>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "30px" }}>Admin Management</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/admin/departments">Manage Departments</Link>
        <Link to="/admin/complaints">View All Complaints</Link>
        <Link to="/admin/reports">View Reports</Link>
      </div>
    </div>
  );
}

export default AdminDashboard;