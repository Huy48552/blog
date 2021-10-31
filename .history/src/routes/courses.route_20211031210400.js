const express = require('express');
const router = express.Router();

const CoursesController = require('../app/controllers/courses.controller');

router.get('/:slug', CoursesController.show);
router.get('/:create', CoursesController.create);
router.get('/:store', CoursesController.store);

module.exports = router;
