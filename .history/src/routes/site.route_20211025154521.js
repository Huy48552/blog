const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/site.controller");

router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;
