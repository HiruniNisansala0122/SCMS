import { useState } from "react";
import { Link } from "react-router-dom";

function AdminComplaints() {
  const [complaints] = useState([
    {
      id: 1,
      title: "WiFi not working in Lab 2",
      category: "Network",
      priority: "HIGH",
      department: "IT Department",
      status: "SUBMITTED",
      date: "2025-03-01"
    },
    {
      id: 2,
      title: "Water leak in washroom",
      category: "Facility",
      priority: "MEDIUM",
      department: "Facilities Department",
      status: "IN_PROGRESS",
      date: "2025-03-02"
    },
    {
      id: 3,
      title: "Lecture timetable issue",
      category: "Academic",
      priority: "LOW",
      department: "Academic Department",
      status: "SUBMITTED",
      date: "2025-03-03"
    },
    {
      id: 4,
      title: "Projector not working",
      category: "Facility",
      priority: "HIGH",
      department: "IT Department",
      status: "RESOLVED",
      date: "2025-03-04"
    }
  ]);

  const [statusFilter, setStatusFilter] = useState("ALL");

  const filteredComplaints = complaints.filter((complaint) => {
    if (statusFilter === "ALL") return true;
    return complaint.status === statusFilter;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Link to="/admin/dashboard">← Back to Dashboard</Link>

      <h1>All Complaints</h1>
      <p>View and filter all complaints in the system</p>

      <div style={{ marginBottom: "15px" }}>
        <label>Status Filter: </label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="ALL">All</option>
          <option value="SUBMITTED">Submitted</option>
          <option value="ASSIGNED">Assigned</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="RESOLVED">Resolved</option>
          <option value="VERIFIED_CLOSED">Closed</option>
        </select>
      </div>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%", maxWidth: "900px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Department</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {filteredComplaints.map((complaint) => (
            <tr key={complaint.id}>
              <td>{complaint.id}</td>
              <td>{complaint.title}</td>
              <td>{complaint.category}</td>
              <td>{complaint.priority}</td>
              <td>{complaint.department}</td>
              <td>{complaint.status}</td>
              <td>{complaint.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredComplaints.length === 0 && <p>No complaints found for this status.</p>}
    </div>
  );
}

export default AdminComplaints;