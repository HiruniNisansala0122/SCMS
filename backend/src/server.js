
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const adminRoutes = require("./modules/admin/admin.routes");
const authRoutes = require("./modules/auth/auth.routes");
const userRoutes = require("./modules/users/users.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Complaint Management API is running"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api", adminRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
