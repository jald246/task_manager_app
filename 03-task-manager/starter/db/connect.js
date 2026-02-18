const mongoose = require('mongoose')


const connectDB = (MONGO_URL) => {
    return mongoose.connect(MONGO_URL)
}

module.exports = connectDB