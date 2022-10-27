// --------------------------------------------------------
// 02-knob
// --------------------------------------------------------
let socket;
let rotateAmt       = 0.0;
let pointSizeX      = 150;
let pointSizeY      = 150;
let startingX;
let startingY;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  startingX = window.innerWidth / 5;
  startingY = window.innerHeight / 5;

  // this works if you're running your server on the same port
  // if you're running from a separate server on a different port
  // you'll need to pass in the address to connect()
  socket = io.connect(); 

  // we listen for message on the socket server called 'data'
  socket.on('data',
    (data) => {
      console.log('knob data: ', data.knobData);
      if (parseInt(data.knobData) != rotateAmt) {
        rotateAmt = (parseInt(data.knobData / 4));
        background(0, 0, 0, 5);
      }
    }
  );
}

// --------------------------------------------------------
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// --------------------------------------------------------
function draw() {
  translate(width/2 + random(200), height/2 + random(200));
  rotate(rotateAmt);
  fill(0, 255, 255, 100);
  stroke(255, 128, 0);
  strokeWeight(20);
  ellipse(startingX, startingY, pointSizeX, pointSizeY);

}