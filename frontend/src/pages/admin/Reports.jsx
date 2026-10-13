import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Reports() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchReports = async () => {
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
    fetchReports();
  }, []);

  const summary = report
    ? [
        { name: "Total Complaints", count: report.totalComplaints, color: "#2563eb" },
        { name: "Submitted", count: report.submitted, color: "#f59e0b" },
        { name: "In Progress", count: report.inProgress, color: "#8b5cf6" },
        { name: "Resolved", count: report.resolved, color: "#10b981" },
        { name: "Closed", count: report.closed, color: "#64748b" }
      ]
    : [];

  const departmentReports = report?.byDepartment || [];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Link to="/admin/dashboard">← Back to Dashboard</Link>

      <h1>Reports</h1>
      <p>Data from MySQL database</p>

      <button onClick={fetchReports} style={{ marginBottom: "15px" }}>
        Refresh
      </button>

      {loading ? (
        <p>Loading reports...</p>
      ) : (
        <>
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginBottom: "25px" }}>
            {summary.map((item) => (
              <div
                key={item.name}
                style={{ width: "160px", padding: "15px", borderRadius: "10px", backgroundColor: item.color, color: "white" }}
              >
                <p style={{ margin: 0 }}>{item.name}</p>
                <h2 style={{ margin: "10px 0 0 0" }}>{item.count}</h2>
              </div>
            ))}
          </div>

          <h2>Complaints by Department</h2>

          <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%", maxWidth: "600px" }}>
            <thead>
              <tr>
                <th>Department</th>
                <th>Complaint Count</th>
              </tr>
            </thead>
            <tbody>
              {departmentReports.map((r) => (
                <tr key={r.department}>
                  <td>{r.department}</td>
                  <td>{r.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Reports;