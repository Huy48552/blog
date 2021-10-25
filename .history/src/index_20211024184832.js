const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

// Template engine / handlebars
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  console.log(req.query);

  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
