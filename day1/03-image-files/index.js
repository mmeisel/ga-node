const express = require('express');
const fg = require('fast-glob');
const os = require('node:os');
const app = express();
const port = 3000;

const imageDir = `${os.homedir()}/Downloads`;
const maxImages = 500;
let images = [];

// Initialization code, runs once at startup
// fast-glob documentation: https://www.npmjs.com/package/fast-glob
console.log('Finding image files...');

const stream = fg.stream(`${imageDir}/**/*.{jpeg,jpg,gif,png}`);

// ReadableStream documentation: https://nodejs.org/api/stream.html#stream_readable_streams
stream.on('data', (file) => {
  if (images.length >= maxImages) {
    // Stop looking for image files once we hit the limit
    stream.destroy();
  }
  else {
    images.push(file);
  }
});

stream.on('close', () => {
  console.log(`${images.length} image files found.`);
});

// Tell our app where to serve our static files (root dir)
app.use(express.static('public'));

// Tell our app where to listen for connections
app.listen(port, () => {
  console.log('Listening on port', port);
});

// Our main endpoint that returns the output
app.get('/random-image', (req, res) => {
  if (images.length == 0) {
    res.sendFile(`${__dirname}/empty.jpg`);
  }
  else {
    const imageNum = Math.floor(Math.random() * images.length);
    res.sendFile(images[imageNum]);
  }
});
