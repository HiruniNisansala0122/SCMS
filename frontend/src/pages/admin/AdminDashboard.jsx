function AdminDashboard() {
  const totalComplaints = 0;
  const submittedComplaints = 0;
  const inProgressComplaints = 0;
  const resolvedComplaints = 0;

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <p>Welcome to Smart Complaint Management System</p>

      <h2>Complaint Summary</h2>

      <div>
        <h3>Total Complaints</h3>
        <p>{totalComplaints}</p>
      </div>

      <div>
        <h3>Submitted Complaints</h3>
        <p>{submittedComplaints}</p>
      </div>

      <div>
        <h3>In Progress Complaints</h3>
        <p>{inProgressComplaints}</p>
      </div>

      <div>
        <h3>Resolved Complaints</h3>
        <p>{resolvedComplaints}</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
