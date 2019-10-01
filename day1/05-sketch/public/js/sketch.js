var button;
var scoresData;
var zero_color;
var ten_color;
var maxItemsInRow;


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);

  scoresData = [];
  maxItemsInRow = 5;

  zero_color = color(255, 0, 255, 0.3 * 255);
  ten_color = color(0, 255, 255, 0.3 * 255);
  
  // setup a button (requires p5.dom library, see index.html)
  button = createButton('Visualize SFBA Teleport Scores');
  button.position(60, 90);
  button.id('scores-btn');
  button.mousePressed(getScores);
}

// --------------------------------------------------------
function getScores() {
  httpGet('/getScoreData', function(response) {
    scoresData = JSON.parse(response)["categories"];
    scoresDataLength = scoresData.length;
  });
  button.hide(); // only retrieve scores once
}

// --------------------------------------------------------
function renderScore(xPos, yPos, radius, score_out_of_10) {
  let lerp_amt = map(score_out_of_10, 0.0, 10.0, 0.0, 1.0);
  let color = lerpColor(zero_color, ten_color, lerp_amt);
  fill(color);
  ellipse(xPos, yPos, radius, radius);
}

// --------------------------------------------------------
function draw() {
  background(255);

  let startingX = 60;
  let startingY = 60;

  textAlign(LEFT);
  textSize(22);
  fill("black");
  let titleText = "Exercise 5: Drawing Data in a Sketch!";
  text(titleText, startingX, startingY);

  noStroke();
  if (scoresData.length > 0) {
    for (let i = 0; i < scoresData.length; i++) {
      let radius = 100;
      let xPos = (i % maxItemsInRow) * (radius * .8) + startingX + (radius / 4);
      let yPos = Math.floor(i / maxItemsInRow) * (radius * .8) + (startingY * 2);
      renderScore(xPos, yPos, radius, scoresData[i]["score_out_of_10"]);
    }
  }
}
