const express = require('express');
const router = express.Router();

const CoursesController = require('../app/controllers/courses.controller');

router.get('/:courses/create', CoursesController.create);
router.get('/:store', CoursesController.store);

router.get('/:slug', CoursesController.show);
module.exports = router;
