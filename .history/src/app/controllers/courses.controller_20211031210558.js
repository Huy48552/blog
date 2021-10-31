const course = require('../models/course.model');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /course/:slug
    show(req, res, next) {
        course
            .findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    // [GET] /course/:create
    create(req, res, next) {
        res.render('create');
    }

    // [POST] /course/:store
    store(req, res, next) {
        res.render('store');
    }
}

module.exports = new CourseController();
