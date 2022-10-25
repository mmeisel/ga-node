let serverCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(128);
  textAlign(CENTER, CENTER);
  updateCount();
}

function draw() {
  background(100, 200, 200);
  text(serverCount, windowWidth / 2, windowHeight / 2);
}

function mouseClicked() {
  updateCount();
}

function updateCount() {
  httpGet('/count', (responseText) => {
    const response = JSON.parse(responseText);
    console.log(responseText, response);
    serverCount = response.count;
  });
}
