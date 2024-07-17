// config/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI); // Логирование переменной окружения

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected \u2713');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;