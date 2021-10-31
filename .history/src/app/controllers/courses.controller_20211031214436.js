const course = require('../models/course.model');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /course/:slug
    show(req, res, next) {
        course
            .findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('./courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    // [GET] /course/:create
    create(req, res, next) {
        res.render('./courses/create');
    }

    // [POST] /course/:store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLAcUtq4_WgfebmQrHXFcPz3kxh6Kg
           `;
        const courses = new course(formData);
        courses.save().then(res.redirect('/'));
    }
}

module.exports = new CourseController();
