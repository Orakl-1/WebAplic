// app.js

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes here (будем добавлять позже)
const indexRoutes = require('./routes/index');

app.use('/api', indexRoutes);
module.exports = app;