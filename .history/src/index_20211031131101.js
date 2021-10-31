const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

const db = require('./config/db');

// Connect to DB

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

// Template engine / handlebars
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    })
);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

var tasks = [
    { title: 'Fix bug 1', status: 'done' },
    { title: 'Fix bug 2', status: 'todo' },
    { title: 'Fix bug 3', status: 'done' },
];

var doneTasks = tasks.filter(function (task) {
    return task.status == 'done';
});

console.log(doneTasks);
