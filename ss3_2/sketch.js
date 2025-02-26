function setup() {
  createCanvas(400, 400);
  background(127)
}

function draw() {
  background(100,200,20,90) // line with trail
  stroke(200,233,100)
  strokeWeight(10)
  line(mouseX,mouseY, pmouseX,pmouseY) // srawing without erasing

  ellipse(mouseX,mouseY, pmouseX *1, pmouseY * 1) // mouse
}
