const axios = require('axios');
const express = require('express');
const app = express();
const PORT = 3000;


// tell our app where to serve our static files
app.use(express.static('public'));

// --------------------------------------------------------
// define a route - what happens when people visit /
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// --------------------------------------------------------
// wrap an api request in our own endpoint
app.get('/getScoreData', (req, res) => {

  let teleportUrl = 'http://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/';
  let options = {
    json: true
  };

  // make an api request to the api /scores endpoint
  axios.get(teleportUrl, { params: options })
    .then((teleportResponse) => {
      res.send(teleportResponse.data);
    })
    .catch((error) => {
      res.send(error.response.data);
    });
});

// --------------------------------------------------------
// tell our app where to listen for connections
app.listen(PORT, function() {
  console.log('listening on PORT: ' + PORT);
});
