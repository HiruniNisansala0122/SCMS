import { Link } from "react-router-dom";

function Reports() {
  const summary = [
    { name: "Total Complaints", count: 100, color: "#2563eb" },
    { name: "Pending Complaints", count: 35, color: "#f59e0b" },
    { name: "Resolved Complaints", count: 45, color: "#10b981" },
    { name: "Closed Complaints", count: 20, color: "#64748b" }
  ];

  const departmentReports = [
    { department: "IT Department", count: 35 },
    { department: "Facilities Department", count: 30 },
    { department: "Academic Department", count: 20 },
    { department: "Administration Department", count: 15 }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Link to="/admin/dashboard">← Back to Dashboard</Link>

      <h1>Reports</h1>
      <p>Complaint summary reports</p>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginBottom: "25px" }}>
        {summary.map((item) => (
          <div
            key={item.name}
            style={{
              width: "190px",
              padding: "15px",
              borderRadius: "10px",
              backgroundColor: item.color,
              color: "white"
            }}
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
          {departmentReports.map((report) => (
            <tr key={report.department}>
              <td>{report.department}</td>
              <td>{report.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;