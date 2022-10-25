
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Reduce the frame rate so this sketch is not quite so taxing (default is 60)
  // You can try a lower number if your computer can't handle it!
  frameRate(10);
}

function draw() {
  // location.origin gives the URL of the current host (without the path, e.g. http://localhost:3000)
  loadImage(`${location.origin}/random-image`, (img) => {
    // Random tint, 10% opacity (out of 255)
    tint(random(255), random(255), random(255), 25);
    image(img, 0, 0, width, height);
  });
}
