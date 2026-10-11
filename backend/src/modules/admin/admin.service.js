const db = require("../../config/db");

const getDepartmentList = () => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM departments WHERE is_active = TRUE ORDER BY id",
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

const addDepartment = (name, description) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO departments (name, description) VALUES (?, ?)",
      [name, description],
      (err, result) => {
        if (err) return reject(err);
        resolve({
          id: result.insertId,
          name,
          description
        });
      }
    );
  });
};

const getAllComplaintsForAdmin = async () => {
  return [];
};

const getAdminReportSummary = async () => {
  return {
    totalComplaints: 0,
    submitted: 0,
    inProgress: 0,
    resolved: 0,
    closed: 0
  };
};

module.exports = {
  getDepartmentList,
  addDepartment,
  getAllComplaintsForAdmin,
  getAdminReportSummary
};