const express = require("express");
const { getBrandsData } = require("../controllers/brandsController");
const router = express.Router();

router.route("/brands").get(getBrandsData);

module.exports = router;
