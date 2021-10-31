const newsRouter = require('./news.route');
const sitesRouter = require('./sites.route');

function route(app) {
    app.get('/news', newsRouter);

    app.get('/', sitesRouter);
}

module.exports = route;
