require('dotenv').config();
//require('lib/oauth.js');
//require('disconnect');
var Discogs = require('disconnect').Client;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
console.log('The value of PORT is:', process.env.PORT);
//console.log(process.env);
const { mongoose } = require('./db.js');
const https = require('https');
const fs = require('fs');
var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

/* app.get('/', function (req, res) {
    res.render('index', {});
  }); */

/* app.get('/', function(req, res){
    res.sendFile(__dirname+'/bin/index.html'); // change the path to your index.html
}); */
app.get('/', (req, res) => {
	res.send('Hello HTTPS!')
  })
//app.listen(PORT, () => console.log(`Server started at port : ${PORT}`));
https.createServer({
	key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(PORT, () => {
	console.log(`Server started at port : ${PORT}`)
  })
  
/* var db = new Discogs().database();
db.getRelease(176126, function(err, data){
	console.log(data);
}); */
// Authenticate by consumer key and secret
app.get('/authorize', function(req, res){
	// console.log("outside");
   // console.log(res);
	var oAuth = new Discogs().oauth();
	oAuth.getRequestToken(
		process.env.consumerKey, 
		process.env.consumerSecret, 
		function(err, requestData) {
			console.log("here");
            console.log(requestData);
			// Persist "requestData" here so that the callback handler can 
			// access it later after returning from the authorize url
			//res.redirect(requestData.authorizeUrl);
		}
	); 
});

app.get('/callback', function(req, res){
	console.log("inside callback");
	var oAuth = new Discogs(requestData).oauth();
	oAuth.getAccessToken(
		req.query.oauth_verifier, // Verification code sent back by Discogs
		function(err, accessData){
			// Persist "accessData" here for following OAuth calls 
			res.send('Received access token!');
		}
	);
});

 var db = new Discogs().database();
 /* db.getRelease(176126, function(err, data){
	console.log("here are the releases");
	console.log(data);
}); */

/* db.getArtist(108713, function(err, data){
	console.log("Artist data");
	console.log(data);
}); */
