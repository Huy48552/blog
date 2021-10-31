const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');

const Course = new Schema(
    {
        name: { type: String, minLenth: 3, maxLenth: 255, required: true },
        description: { type: String },
        image: { type: String },
        slug: { type: String },
        videoId: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('course', Course);
