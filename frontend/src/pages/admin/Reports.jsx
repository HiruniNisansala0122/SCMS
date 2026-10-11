function Reports() {
  const reports = [
    { name: "Total Complaints", count: 120 },
    { name: "Submitted Complaints", count: 25 },
    { name: "In Progress Complaints", count: 40 },
    { name: "Resolved Complaints", count: 35 },
    { name: "Closed Complaints", count: 20 }
  ];

  return (
    <div>
      <h1>Reports</h1>

      <p>Complaint summary reports</p>

      <table border="1">
        <thead>
          <tr>
            <th>Report Type</th>
            <th>Count</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr key={report.name}>
              <td>{report.name}</td>
              <td>{report.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;
