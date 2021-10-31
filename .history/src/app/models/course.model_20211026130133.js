const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, minLenth: 3, maxLenth: 255 },
    description: { type: String, minLenth: 3, maxLenth: 600 },
    img: { type: String },
    createdAt: { type: Date, default: Date.now },
});
