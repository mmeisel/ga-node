const axios = require('axios');
const express = require('express');

const app = express();
const PORT = 3000;


// tell our app where to serve our static files
app.use(express.static('public'));

// define a route - what happens when people visit /
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// make an api request to the api /scores endpoint
let teleportUrl = 'http://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/';
let options = {
  json: true 
};

axios.get(teleportUrl, { params: options })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

// tell our app where to listen for connections
app.listen(PORT, function() {
  console.log('listening on PORT: ' + PORT);
});
