const express = require("express");
const route = require(".");
const router = express.Router();

const newsController = require("../app/controllers/news.controller");

router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;
