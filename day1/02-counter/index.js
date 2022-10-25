const express = require('express');
const app = express();
const port = 3000;

// Tell our app where to serve our static files (root dir)
app.use(express.static('public'));

// Tell our app where to listen for connections
app.listen(port, () => {
  console.log('Listening on port', port);
});

let count = 0;

app.get('/count', (req, res) => {
  count += 1;
  res.send({ 'count': count });
});
