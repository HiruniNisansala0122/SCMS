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

const getAllComplaintsForAdmin = () => {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT
        c.id,
        c.title,
        c.category,
        c.priority,
        c.status,
        c.created_at,
        d.name AS department
      FROM complaints c
      LEFT JOIN departments d ON c.department_id = d.id
      ORDER BY c.id DESC
    `;
    db.query(sql, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const getAdminReportSummary = () => {
  return new Promise((resolve, reject) => {
    const summarySql = `
      SELECT
        COUNT(*) AS totalComplaints,
        COALESCE(SUM(status = 'SUBMITTED'), 0) AS submitted,
        COALESCE(SUM(status = 'ASSIGNED'), 0) AS assigned,
        COALESCE(SUM(status = 'IN_PROGRESS'), 0) AS inProgress,
        COALESCE(SUM(status = 'RESOLVED'), 0) AS resolved,
        COALESCE(SUM(status = 'VERIFIED_CLOSED'), 0) AS closed
      FROM complaints
    `;

    db.query(summarySql, (err, summaryResults) => {
      if (err) return reject(err);

      const byDeptSql = `
        SELECT d.name AS department, COUNT(c.id) AS count
        FROM departments d
        LEFT JOIN complaints c ON c.department_id = d.id
        GROUP BY d.id, d.name
        ORDER BY d.id
      `;

      db.query(byDeptSql, (err2, deptResults) => {
        if (err2) return reject(err2);

        resolve({
          ...summaryResults[0],
          byDepartment: deptResults
        });
      });
    });
  });
};

module.exports = {
  getDepartmentList,
  addDepartment,
  getAllComplaintsForAdmin,
  getAdminReportSummary
};