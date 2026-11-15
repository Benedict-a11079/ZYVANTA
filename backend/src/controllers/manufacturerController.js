
const pool = require("../config/db");

const getManufacturers = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        manufacturer_id,
        name,
        slug,
        country_of_origin,
        official_website
      FROM manufacturers
      WHERE is_active = TRUE
      ORDER BY name ASC
    `);

    res.status(200).json({
      success: true,
      count: result.rows.length,
      data: result.rows
    });

  } catch (error) {
    console.error("Manufacturer API error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to fetch manufacturers"
    });
  }
};

module.exports = { getManufacturers };
