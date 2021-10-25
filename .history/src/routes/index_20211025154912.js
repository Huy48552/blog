const newsRouter = require("./news.route");
const siteRouter = require("./site.route");

function route(app) {
  app.use("/news", newsRouter);

  app.use("/", newsRouter);
}

module.exports = route;
