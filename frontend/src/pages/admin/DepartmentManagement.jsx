function DepartmentManagement() {
  const departments = [
    {
      id: 1,
      name: "IT Department",
      description: "Network and system issues"
    },
    {
      id: 2,
      name: "Facilities Department",
      description: "Water, electricity and building issues"
    },
    {
      id: 3,
      name: "Academic Department",
      description: "Lecture and academic issues"
    }
  ];

  return (
    <div>
      <h1>Department Management</h1>

      <p>Manage system departments</p>

      <button>Add Department</button>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Department Name</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.name}</td>
              <td>{department.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentManagement;
