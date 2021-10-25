const express = require("express");
const router = require("router");

const newsController = require("../app/controllers/NewsController");

router.use("/", newsController.index);

module.exports = router;
