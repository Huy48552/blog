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

// let numbers = [1, 2, 3, 4, 5];
// let isOddArray = numbers.every(function (item) {
//     return item % 2 != 0;
// });
// console.log(isOddArray); // false

let numbers = [5, 4, 3, 2, 1];
let isDescArray = numbers.every(function (item, index, arr) {
    if (index == 0) {
        return true;
    } else {
        return item < arr[index - 1];
    }
});

console.log(isDescArray); // true
