const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const mainRoutes = require('./routes/mainRoute');


mongoose.connect('mongodb://localhost:27017/jwtokenDB',
    { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(mainRoutes)
PORT = 5000;

app.listen(PORT, () => {
    console.log('Server started');
});