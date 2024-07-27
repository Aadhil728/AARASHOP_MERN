const express = require("express");
const { getBlogsData } = require("../controllers/blogsController");
const router = express.Router();

router.route("/blogs").get(getBlogsData);

module.exports = router;
