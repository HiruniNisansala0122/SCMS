import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AdminComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);

  const fetchComplaints = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/admin/complaints");
      const result = await res.json();
      setComplaints(result.data || []);
    } catch (err) {
      alert("Backend not running. Please run backend on port 5000");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const filteredComplaints = complaints.filter((c) => {
    if (statusFilter === "ALL") return true;
    return c.status === statusFilter;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Link to="/admin/dashboard">← Back to Dashboard</Link>

      <h1>All Complaints</h1>
      <p>Data from MySQL database</p>

      <button onClick={fetchComplaints} style={{ marginBottom: "10px" }}>
        Refresh
      </button>

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

      {loading ? (
        <p>Loading complaints...</p>
      ) : (
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
            {filteredComplaints.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.title}</td>
                <td>{c.category}</td>
                <td>{c.priority}</td>
                <td>{c.department || "-"}</td>
                <td>{c.status}</td>
                <td>{c.created_at ? new Date(c.created_at).toLocaleDateString() : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!loading && filteredComplaints.length === 0 && <p>No complaints found.</p>}
    </div>
  );
}

