
const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// GET /api/variants?model_id=...
router.get("/", async (req, res) => {
  try {
    const { model_id } = req.query;

    if (!model_id) {
      return res.status(400).json({
        success: false,
        message: "model_id is required"
      });
    }

    const query = `
      SELECT
        cv.variant_id,
        cv.generation_id,
        cv.variant_name,
        cv.variant_code,
        cv.model_year,
        cv.fuel_type,
        cv.transmission_type,
        cv.battery_kwh,
        cv.seating_capacity,
        cv.is_currently_sold,
        mg.generation_name,
        mg.model_id
      FROM car_variants cv
      INNER JOIN model_generations mg
        ON cv.generation_id = mg.generation_id
      WHERE mg.model_id = $1::uuid
        AND cv.is_currently_sold = TRUE
      ORDER BY cv.model_year DESC NULLS LAST,
               cv.variant_name ASC
    `;

    const result = await pool.query(query, [model_id]);

    res.json({
      success: true,
      count: result.rowCount,
      data: result.rows
    });
  } catch (error) {
    console.error("Variants API error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to fetch variants"
    });
  }
});

module.exports = router;
