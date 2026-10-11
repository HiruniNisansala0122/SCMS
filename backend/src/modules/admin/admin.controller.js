const {
  getDepartmentList,
  addDepartment,
  getAllComplaintsForAdmin,
  getAdminReportSummary
} = require("./admin.service");

const getDepartments = async (req, res) => {
  try {
    const data = await getDepartmentList();
    res.json({
      success: true,
      data
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

const createDepartment = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Department name is required"
      });
    }

    const data = await addDepartment(name, description);

    res.status(201).json({
      success: true,
      message: "Department created successfully",
      data
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

const getAdminComplaints = async (req, res) => {
  const data = await getAllComplaintsForAdmin();
  res.json({
    success: true,
    data
  });
};

const getAdminReports = async (req, res) => {
  const data = await getAdminReportSummary();
  res.json({
    success: true,
    data
  });
};

module.exports = {
  getDepartments,
  createDepartment,
  getAdminComplaints,
  getAdminReports
};