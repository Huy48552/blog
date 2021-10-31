const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/courses.controller');

router.get('/:slug', coursesController.sh);

module.exports = router;
