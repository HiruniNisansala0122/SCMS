
const db = require("../../config/db");

async function getUserById(userId) {
  const [users] = await db.promise().execute(
    `SELECT id, full_name, email, role, is_active, created_at, updated_at
     FROM users
     WHERE id = ?
     LIMIT 1`,
    [userId]
  );

  if (users.length === 0) {
    return null;
  }

  const user = users[0];

  return {
    id: user.id,
    fullName: user.full_name,
    email: user.email,
    role: user.role,
    isActive: Boolean(user.is_active),
    createdAt: user.created_at,
    updatedAt: user.updated_at
  };
}

module.exports = { getUserById };
