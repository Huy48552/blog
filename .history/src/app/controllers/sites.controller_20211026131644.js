class SiteController {
    // [GET] home
    home(req, res) {
        Course.find({}, function (err, docs) {
            // docs.forEach
        });

        // res.render("home");
    }

    // [GET] search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
