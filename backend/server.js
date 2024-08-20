require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const dailyRouter = require('./routes/daily');
const employerRouter=require('./routes/Employer');

// Create the app
const app = express();

// Middleware
app.use(express.json()); // Built-in JSON body parser
app.use(cors());

// Routes
app.use('/api/daily', dailyRouter);
app.use('/api/employer', employerRouter);

// Connect to DB & listen to ports
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database with URL: " + process.env.MONGO_URL);
        app.listen(process.env.PORT, () => {
            console.log("Server running on port: " + process.env.PORT);
        });
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });
