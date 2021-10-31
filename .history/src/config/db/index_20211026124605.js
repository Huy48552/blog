const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/huy_education_dev');
        console.log('connect successfully');
    } catch (err) {
        console.log('error');
    }
}
