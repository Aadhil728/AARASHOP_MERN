const express = require("express");
const { getBannerData } = require("../controllers/bannerController");
const router = express.Router();

router.route("/banner").get(getBannerData);

module.exports = router;
