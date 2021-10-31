const newsRouter = require('./news.route');
const sitesRouter = require('./sites.route');
const coursesRouter = require('./courses.route');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', sitesRouter);

    app.use('/courses', coursesRouter);
}

module.exports = route;
