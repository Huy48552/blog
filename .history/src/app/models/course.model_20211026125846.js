const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, minLenth: 3 },
    description: { type: String, maxLenth: 255 },
    img: { type: String },
});
