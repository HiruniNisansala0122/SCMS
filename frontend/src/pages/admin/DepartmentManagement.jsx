import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DepartmentManagement() {
  const [departments, setDepartments] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDepartments = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/departments");
      const result = await res.json();
      setDepartments(result.data || []);
    } catch (err) {
      alert("Backend not running. Please run backend on port 5000");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const addDepartment = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Department name is required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/departments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description })
      });

      const result = await res.json();

      if (result.success) {
        setDepartments([...departments, result.data]);
        setName("");
        setDescription("");
      } else {
        alert(result.message);
      }
    } catch (err) {
      alert("Failed to add department. Check backend.");
    }
  };

  const deleteDepartment = (id) => {
    setDepartments(departments.filter((d) => d.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Link to="/admin/dashboard">← Back to Dashboard</Link>

      <h1>Department Management</h1>
      <p>Data from MySQL database</p>

      <button onClick={fetchDepartments} style={{ marginBottom: "10px" }}>
        Refresh
      </button>

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

      {loading ? (
        <p>Loading departments...</p>
      ) : (
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
            {departments.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.description}</td>
                <td>
                  <button onClick={() => deleteDepartment(d.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

