
const express = require("express");
const router = express.Router();

const {
  getManufacturers
} = require("../controllers/manufacturerController");

router.get("/", getManufacturers);

module.exports = router;
