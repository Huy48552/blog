const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, minLenth: 3, maxLenth: 255, required: true },
    description: { type: String, minLenth: 3, maxLenth: 600 },
    image: { type: String },
    slug: { type: String },
    videoId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('course', Course);
