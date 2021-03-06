const express = require("express");
const router = express.Router();

const sitesController = require("../app/controllers/sites.controller");

router.use("/search", sitesController.search);
router.use("/", sitesController.home);

module.exports = router;
