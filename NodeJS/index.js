const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const { mongoose } = require('./db.js');
var discogsController = require('./controllers/discogsController.js');

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/discogs', discogsController);