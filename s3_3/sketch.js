let a = 100;
let ellipseHeight = 50;
let grow = 0.5;
let xLocation = 0;

let r = 0;
let g = 0;
let b = 0;

const centerPosX = 400;
const centerPosY = 300;

function setup() {
createCanvas(800, 600);
}

function draw() {
  background(r,g,b);

  //ellipse(mouseX, mouseY, a, ellipseHeight) // ellipse on cursor 
  //ellipse(mouseX, mouseY, a*9, ellipseHeight) // flat ellipse on cursor
  ellipse(xLocation,height/2,width/4,width/4); // ball goes right

  xLocation = xLocation = xLocation+1; // same thing as xLocation++ and xLocation--
  xLocation+= 5; //faster movement

  rectMode(CENTER);
  //rect(mouseX, mouseY,grow,grow); // rect grows on cursor

  grow += 0.5;
  
}

function mousePressed() 
{
r++;
g+=2;
b+=10;
} // Everytime mouse is pressed color changes
