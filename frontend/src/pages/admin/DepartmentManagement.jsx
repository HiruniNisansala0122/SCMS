import { useState } from "react";
import { Link } from "react-router-dom";

function DepartmentManagement() {
  const [departments, setDepartments] = useState([
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
  ]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const addDepartment = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Department name is required");
      return;
    }

    const newDepartment = {
      id: Date.now(),
      name: name.trim(),
      description: description.trim()
    };

    setDepartments([...departments, newDepartment]);
    setName("");
    setDescription("");
  };

  const deleteDepartment = (id) => {
    setDepartments(departments.filter((department) => department.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Link to="/admin/dashboard">← Back to Dashboard</Link>

      <h1>Department Management</h1>
      <p>Add and manage system departments</p>

      <form onSubmit={addDepartment} style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Department name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px" }}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: "8px", width: "300px" }}
        />

        <button type="submit" style={{ padding: "8px 15px" }}>
          Add Department
        </button>
      </form>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%", maxWidth: "800px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Department Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.name}</td>
              <td>{department.description}</td>
              <td>
                <button onClick={() => deleteDepartment(department.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentManagement;