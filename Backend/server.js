// Import dependencies

const express = require('express');
const mongoose = require('mongoose');
const Pusher = require('pusher');
const cors = require('cors');
const logger = require('morgan');

const mongoData = require('./mongoData.js');

// app config
const app = express();
const port = process.env.PORT || 3001;


require('dotenv').config();

// middlewares
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// db config
const mongoURI = process.env.DATABASE_URL

mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 

// api routes
app.get('/', (req, res) => res.status(200).send('Hello this is working'))

// listen
app.listen(port, function () {
	console.log(`Express app listening on port ${port}`);
});
