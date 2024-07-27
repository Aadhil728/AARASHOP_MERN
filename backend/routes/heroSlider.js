const express = require("express");
const { getHeroSlider } = require("../controllers/heroSliderController");
const router = express.Router();

router.route("/hero-slider").get(getHeroSlider);

module.exports = router;
