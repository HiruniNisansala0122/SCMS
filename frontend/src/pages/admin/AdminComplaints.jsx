function AdminComplaints() {
  const complaints = [
    {
      id: 1,
      title: "WiFi not working in Lab 2",
      category: "Network",
      priority: "HIGH",
      status: "SUBMITTED"
    },
    {
      id: 2,
      title: "Water leak in washroom",
      category: "Facility",
      priority: "MEDIUM",
      status: "IN_PROGRESS"
    },
    {
      id: 3,
      title: "Lecture timetable issue",
      category: "Academic",
      priority: "LOW",
      status: "RESOLVED"
    }
  ];

  return (
    <div>
      <h1>All Complaints</h1>

      <p>View all complaints submitted to the system.</p>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint.id}>
              <td>{complaint.id}</td>
              <td>{complaint.title}</td>
              <td>{complaint.category}</td>
              <td>{complaint.priority}</td>
              <td>{complaint.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminComplaints;
