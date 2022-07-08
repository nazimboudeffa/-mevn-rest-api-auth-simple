const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const  cors = require("cors");
const bodyParser = require('body-parser');
// Import Routes
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

dotenv.config();

// Connect to DB
mongoose.connect('mongodb+srv://nazimboudeffa:'+process.env.PASS+'@cluster0.fruqwgc.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }, () => {
    console.log('Connected to DB!');
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Route Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(5000, ()=> console.log('Server up!'));