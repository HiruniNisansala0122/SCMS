
const { getUserById } = require("./users.service");

async function getMe(req, res) {
  try {
    const user = await getUserById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found."
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "This account is inactive."
      });
    }

    return res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    console.error("Get user error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve user details."
    });
  }
}

module.exports = { getMe };
