const course = require('../models/course.model');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CoursesController {
    // [GET] home
    show(req, res) {
        res.send('COURSES');
    }
}

module.exports = new CoursesController();
