import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import AdminDashboard from "./pages/admin/AdminDashboard";
import DepartmentManagement from "./pages/admin/DepartmentManagement";
import AdminComplaints from "./pages/admin/AdminComplaints";
import Reports from "./pages/admin/Reports";

import SubmitComplaint from "./pages/complaints/SubmitComplaint";
import MyComplaints from "./pages/complaints/MyComplaints";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "15px", fontFamily: "Arial" }}>
        <h2>SCMS Test Navigation</h2>

        <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
          <Link to="/admin/dashboard">Admin Dashboard</Link>
          <Link to="/admin/departments">Departments</Link>
          <Link to="/admin/complaints">All Complaints</Link>
          <Link to="/admin/reports">Reports</Link>
          <Link to="/complaints/submit">Submit Complaint</Link>
          <Link to="/complaints/my">My Complaints</Link>
        </div>

        <hr />

        <Routes>
          <Route path="/" element={<Navigate to="/admin/dashboard" />} />

          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/departments" element={<DepartmentManagement />} />
          <Route path="/admin/complaints" element={<AdminComplaints />} />
          <Route path="/admin/reports" element={<Reports />} />

          <Route path="/complaints/submit" element={<SubmitComplaint />} />
          <Route path="/complaints/my" element={<MyComplaints />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;