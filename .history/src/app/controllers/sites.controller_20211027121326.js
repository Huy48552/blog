const course = require('../models/course.model');

class SiteController {
    // [GET] home
    home(req, res, next) {
        course
            .find({})
            .then((courses) => {
                courses = courses.map((course) => course.toObject());
                res.render('home', { courses });
            })
            .catch(next);
        // res.render("home");
    }

    // [GET] search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
