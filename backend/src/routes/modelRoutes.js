
const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// GET all car models
// Optional filter: ?manufacturer_id=UUID
router.get("/", async (req, res) => {
  try {
    const { manufacturer_id } = req.query;

    const query = `
      SELECT
        model_id,
        manufacturer_id,
        name,
        slug,
        body_type,
        segment
      FROM car_models
      WHERE is_active = TRUE
        AND (
          $1::uuid IS NULL
          OR manufacturer_id = $1::uuid
        )
      ORDER BY name ASC
    `;

    const result = await pool.query(
      query,
      [manufacturer_id || null]
    );

    res.json({
      success: true,
      count: result.rowCount,
      data: result.rows
    });

  } catch (error) {
    console.error("Car models API error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to fetch car models"
    });
  }
});

module.exports = router;
