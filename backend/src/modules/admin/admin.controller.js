const getDepartments = (req, res) => {
  res.json({
    success: true,
    message: "Department list returned successfully",
    data: []
  });
};

const createDepartment = (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Department name is required"
    });
  }

  res.status(201).json({
    success: true,
    message: "Department created successfully",
    data: {
      name,
      description
    }
  });
};

const getAdminComplaints = (req, res) => {
  res.json({
    success: true,
    message: "Admin complaints list returned successfully",
    data: []
  });
};

const getAdminReports = (req, res) => {
  res.json({
    success: true,
    message: "Admin reports returned successfully",
    data: {
      totalComplaints: 0,
      submitted: 0,
      inProgress: 0,
      resolved: 0,
      closed: 0
    }
  });
};

module.exports = {
  getDepartments,
  createDepartment,
  getAdminComplaints,
  getAdminReports
};
