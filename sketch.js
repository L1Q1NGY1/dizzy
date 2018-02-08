function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  angleMode(DEGREES);
  
  frameRate(400);
}

function draw() {
  translate(width/2,height/2);
  rotate(frameCount*10);
  noStroke();
  fill(lerpColor(color(92,0,26,10), color(6,94,79,10), frameCount/200));
  textSize(32+frameCount);
  text("*", 10, 30);
  if (frameCount == 1000) {
  noLoop();
  }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}