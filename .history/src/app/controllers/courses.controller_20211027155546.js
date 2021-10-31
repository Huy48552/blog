const course = require('../models/course.model');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class CoursesController {
    // [GET] /course/:slug
    show(req, res, next) {
        course
            .findOne({ slug: 'req.params.slug' })
            .then((course) => {
                res.render('./courses/show');
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
