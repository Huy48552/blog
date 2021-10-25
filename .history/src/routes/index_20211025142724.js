function route(app) {
  app.get("/", (req, res) => {
    res.render("home");
  });

  app.get("/search", (req, res) => {
    res.render("search");
  });

  app.post("/search", (req, res) => {
    res.send("");
  });

  app.get("/news", (req, res) => {
    res.render("news");
  });
}

module.exports = route;
