
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const manufacturerRoutes = require("./routes/manufacturerRoutes");
const app = express();
const modelRoutes = require("./routes/modelRoutes");
const variantRoutes = require("./routes/variantRoutes");
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5173"
  ]
}));

app.use(express.json());
app.use("/api/manufacturers", manufacturerRoutes);
app.use("/api/variants", variantRoutes);
app.use("/api/models", modelRoutes);
app.get("/api/health", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT current_database() AS database"
    );

    res.json({
      success: true,
      message: "ZYVANTA database connected!",
      database: result.rows[0].database
    });
  } catch (error) {
    console.error("Database error:", error.message);

    res.status(500).json({
      success: false,
      message: "Database connection failed"
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`ZYVANTA backend running on port ${PORT}`);
});
