const getDepartmentList = async () => {
  return [];
};

const addDepartment = async (departmentData) => {
  return {
    id: 0,
    ...departmentData
  };
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
