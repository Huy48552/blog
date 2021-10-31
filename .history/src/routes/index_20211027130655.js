const newsRouter = require('./news.route');
const sitesRouter = require('./sites.route');
const coursesRouter = require('./courses.route');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);

    app.use('/', sitesRouter);
}

module.exports = route;
