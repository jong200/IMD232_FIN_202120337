let dataPoint = [];
let actRandomSeed = 8;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  frameRate(5);

  for (let i = 0; i < 50; i++) {
    dataPoint.push(0.5);
  }

  background(0);
}

function draw() {
  dataPoint[dataPoint.length - 1] = random();
  background(0);
  stroke(1);
  fill(0, 130, 164);

  for (let i = 0; i < dataPoint.length; i++) {
    const x = (width / (dataPoint.length + 1)) * (i + 1);
    const y = map(dataPoint[i], 0, 1, height, 0);
    ellipse(x, y, 10);
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
  stroke(0);
  noFill();

  randomSeed(actRandomSeed);
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
