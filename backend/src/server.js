const express = require("express");
const cors = require("cors");

const adminRoutes = require("./modules/admin/admin.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Complaint Management API is running" });
});

app.use("/api", adminRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});