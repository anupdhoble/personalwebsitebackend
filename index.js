const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
//middleware
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
mongoose.connect("mongodb://149.129.188.18:27017/").then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is running on port:${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});

app.use('/blogs', require('./routes/blogs.js'));
