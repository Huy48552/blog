const course = require('../models/course.model');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CoursesController {
    // [GET] home
    home(req, res, next) {
        course
            .find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
        // res.render("home");
    }

    // [GET] search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new CoursesController();
