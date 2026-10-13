
   const express = require("express");

const {
  getDepartments,
  createDepartment,
  getAdminComplaints,
  getAdminReports
} = require("./admin.controller");

const router = express.Router();

router.get("/departments", getDepartments);

router.post("/departments", createDepartment);

router.get("/admin/complaints", getAdminComplaints);

router.get("/admin/reports", getAdminReports);

module.exports = router;
