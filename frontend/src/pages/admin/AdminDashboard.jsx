import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchReport = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/admin/reports");
      const result = await res.json();
      setReport(result.data);
    } catch (err) {
      alert("Backend not running. Please run backend on port 5000");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReport();
  }, []);

  const stats = report
    ? [
        { title: "Total Complaints", count: report.totalComplaints, color: "#2563eb" },
        { title: "Submitted", count: report.submitted, color: "#f59e0b" },
        { title: "In Progress", count: report.inProgress, color: "#8b5cf6" },
        { title: "Resolved", count: report.resolved, color: "#10b981" },
        { title: "Closed", count: report.closed, color: "#64748b" }
      ]
    : [];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome to Smart Complaint Management System</p>
      <p>Data from MySQL database</p>

      <button onClick={fetchReport} style={{ marginBottom: "15px" }}>
        Refresh
      </button>

      {loading ? (
        <p>Loading dashboard...</p>
      ) : (
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "10px" }}>
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
      )}

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