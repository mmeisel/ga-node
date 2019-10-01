var button;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // setup a button (requires p5.dom library, see index.html)
  button = createButton('Visualize SFBA Teleport Scores');
  button.position(60, 90);
  button.id('scores-btn');
  button.mousePressed(getScores);

  textAlign(CENTER);
}

// --------------------------------------------------------
function getScores() {
  httpGet('/getScoreData', function(response) {
    console.log(JSON.parse(response));
  });
}

// --------------------------------------------------------
function draw() {
  background(255);

  textAlign(LEFT);
  textSize(22);
  let titleText = "Exercise 4: Getting data from an API request";
  text(titleText, 60, 60);
}
