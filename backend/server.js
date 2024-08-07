require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const dailyRouter = require('./routes/daily');

// Create the app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes
app.use('/api/daily', dailyRouter);

// Connect to DB & listen to ports
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database with URL: " + process.env.MONGO_URL);
        app.listen(process.env.PORT, () => {
            console.log("Server works!");
            console.log("Port is: " + process.env.PORT);
           
        });
    })
    .catch((error) => {
        console.log(error);
    });
