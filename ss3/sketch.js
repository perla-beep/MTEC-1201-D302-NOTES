function setup() {
  createCanvas(400, 400);
  //background(220,100,200);
  //line winthout erasing
}

function draw() // loop forever
{
  background(220,100,200); // line with erasing
  line (0,0,200,200) // static line
  line(0,0,mouseX, mouseY) // dynamice line

  ellipse(mouseX, mouseY, 50,50) // ellipse follow mouse position

}

