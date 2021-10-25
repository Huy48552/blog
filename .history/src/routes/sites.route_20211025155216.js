const express = require("express");
const router = express.Router();

const sitesController = require("../app/controllers/sites.controller");

router.use("/:slug", sitesController.show);
router.use("/", sitesController.index);

module.exports = router;
