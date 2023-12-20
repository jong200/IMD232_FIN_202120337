let dataPoint = [];
let actRandomSeed = 8;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  frameRate(8);

  for (let i = 0; i < 100; i++) {
    dataPoint.push(0.5);
  }

  background(50, 55, 100);
}

function draw() {
  dataPoint[dataPoint.length - 1] = random(); // Original Code from:https://spctrm404.github.io/IMD232/src/w7/recording/step4/index.html //OO-SUNG SON (spctrm404)
  // The Nature of Code
  // Example w7: step4
  //Modified by YU JEONG LEE
  background(50, 55, 100);
  noStroke();
  fill(0, 130, 164);

  for (let i = 0; i < dataPoint.length; i++) {
    const x = (width / (dataPoint.length + 1)) * (i + 1);
    const y = map(dataPoint[i], 0, 1, height, 0);
    ellipse(x, y, 8);
  }
  for (let i = 0; i < dataPoint.length - 1; i++) {
    dataPoint[i] = dataPoint[i + 1];
  }
  randomSeed(actRandomSeed);
  for (let x = 0; x < width; x += 10) {
    let y = random(0, height);

    mousePressed = function () {
      actRandomSeed = random(100000);
    };
  }
  fill(255, 250, 0);
  ellipseMode(RADIUS);

  ellipse(700, 70, 50, 50);
  ellipseMode(CENTER);
  fill(255, 200, 0);
  ellipse(700, 70, 55, 55);
  noStroke();

  randomSeed(actRandomSeed); // Original Code from:https://github.com/generative-design/Code-Package-p5.js/blob/master/02_M/M_1_1_01/sketch.js
  // The Nature of Code
  // Example :M_1_1_01
  //Modified by YU JEONG LEE
  beginShape();
  for (let x = 1; x < width; x += 10) {
    let y = (0, height);
    vertex(x, y);
  }
  endShape();
  for (let i = 0; i < dataPoint.length - 1; i++) {
    dataPoint[i] = dataPoint[i + 1];
  }
}
