const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// Import Routes
const authRoute = require('./routes/auth');

dotenv.config();

// Connect to DB
mongoose.connect('mongodb+srv://nazimboudeffa:'+process.env.pass+'@cluster0.fruqwgc.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('Connected to DB!');
});

// Middleware
app.use(express.json());

// Route Middleware
app.use('/api/user', authRoute);

app.listen(5000, ()=> console.log('Server up!'));