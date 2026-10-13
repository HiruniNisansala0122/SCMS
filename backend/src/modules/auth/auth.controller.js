
const { registerUser, loginUser } = require("./auth.service");

async function register(req, res) {
  try {
    const { fullName, email, password } = req.body;

    if (
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Full name, email and password are required."
      });
    }

    if (fullName.trim().length < 2 || fullName.trim().length > 100) {
      return res.status(400).json({
        success: false,
        message: "Full name must be between 2 and 100 characters."
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail) || normalizedEmail.length > 255) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address."
      });
    }

    if (password.length < 8 || password.length > 72) {
      return res.status(400).json({
        success: false,
        message: "Password must be between 8 and 72 characters."
      });
    }

    const user = await registerUser({
      fullName,
      email: normalizedEmail,
      password
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful.",
      user
    });
  } catch (error) {
    if (error.statusCode === 409) {
      return res.status(409).json({
        success: false,
        message: error.message
      });
    }

    console.error("Registration error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to register user. Please try again."
    });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required."
      });
    }

    if (email.trim().length > 255 || password.length > 72) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password."
      });
    }

    const result = await loginUser({ email, password });

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token: result.token,
      user: result.user
    });
  } catch (error) {
    if (error.statusCode === 401 || error.statusCode === 403) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message
      });
    }

    console.error("Login error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to log in. Please try again."
    });
  }
}

module.exports = { register, login };
