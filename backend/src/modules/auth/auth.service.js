const db = require("../../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser({ fullName, email, password }) {
  const normalizedEmail = email.trim().toLowerCase();

  const [existingUsers] = await db.promise().execute(
    "SELECT id FROM users WHERE email = ?",
    [normalizedEmail]
  );

  if (existingUsers.length > 0) {
    const error = new Error("Email is already registered.");
    error.statusCode = 409;
    throw error;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const [result] = await db.promise().execute(
    `INSERT INTO users (full_name, email, password_hash, role)
     VALUES (?, ?, ?, 'USER')`,
    [fullName.trim(), normalizedEmail, passwordHash]
  );

  return {
    id: result.insertId,
    fullName: fullName.trim(),
    email: normalizedEmail,
    role: "USER"
  };
}

async function loginUser({ email, password }) {
  const normalizedEmail = email.trim().toLowerCase();

  const [users] = await db.promise().execute(
    `SELECT id, full_name, email, password_hash, role, is_active
     FROM users
     WHERE email = ?`,
    [normalizedEmail]
  );

  if (users.length === 0) {
    const error = new Error("Invalid email or password.");
    error.statusCode = 401;
    throw error;
  }

  const user = users[0];

  if (!user.is_active) {
    const error = new Error("This account is inactive.");
    error.statusCode = 403;
    throw error;
  }

  const passwordMatches = await bcrypt.compare(
    password,
    user.password_hash
  );

  if (!passwordMatches) {
    const error = new Error("Invalid email or password.");
    error.statusCode = 401;
    throw error;
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured.");
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  return {
    token,
    user: {
      id: user.id,
      fullName: user.full_name,
      email: user.email,
      role: user.role
    }
  };
}

module.exports = { registerUser, loginUser };