const express = require('express');
const request = require('request');
const app     = express();
const PORT    = 3000;


// tell our app where to serve our static files
app.use(express.static('public'));

// --------------------------------------------------------
// define a route - what happens when people visit /
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// --------------------------------------------------------
// wrap an api request in our own endpoint
app.get('/getScoreData', function(req, res) {
  
  let teleportUrl = 'http://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/';
  let options = {
    json: true 
  };

  // make an api request to the api /scores endpoint
  request(teleportUrl, options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.send(error);
    }
  }); 
});

// --------------------------------------------------------
// tell our app where to listen for connections
app.listen(PORT, function() {
  console.log('listening on PORT: ' + PORT);
});