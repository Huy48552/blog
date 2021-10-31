const course = require('../models/course.model');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CoursesController {
    // [GET] /course/:slug
    show(req, res, next) {
        // course
        // .findOne({ slug: 'req.params.slug' })
        // .then((course) => {
        //     res.json(course);
        // })
        // .catch(next);
        res.send('haha');
    }
}

module.exports = new CoursesController();
