const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://localhost:27017/huy_education_dev');
}
