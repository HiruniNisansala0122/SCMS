const express = require("express");

const router = express.Router();

router.get("/departments", (req, res) => {
  res.json({
    message: "Get all departments"
  });
});

router.post("/departments", (req, res) => {
  res.json({
    message: "Create a new department"
  });
});

router.get("/admin/complaints", (req, res) => {
  res.json({
    message: "Get all complaints for admin"
  });
});

router.get("/admin/reports", (req, res) => {
  res.json({
    message: "Get admin reports"
  });
});

module.exports = router;
