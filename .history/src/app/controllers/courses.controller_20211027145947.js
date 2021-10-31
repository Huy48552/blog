const course = require('../models/course.model');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CoursesController {
    // [GET] /course/:slug
    show(req, res, next) {
        courses
            .findOne({ slug: req.params.slug })
            .then((course) => {
                res.json(course);
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
