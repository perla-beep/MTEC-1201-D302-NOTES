let toggle=false;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER)
  textSize(22)
  rectMode(CENTER)
  textAlign(CENTER)
}

function draw() {
  background(120,20,50)
  printHi(); // declare anywhere after setup
  let x = returnNumber();
  print(x)


// drawing one ice cream
 /* fill(170,120,25)
  triangle(50,200,100,200,75,300)
  fill(170,230,180)
  ellipse(75,200,80,80)
  text ("mint",75,150)*/



  iceCream(50,200,80,170,230,180,"MINT")
  iceCream(200,50)
if(toggle){
  rectRayDisplay(25,10,100,"m")
}
else{
  fill(0);
}
}

function printHi(x,r,y,c){ //function we made
  print("hello");
  print("this is my first function")
}

function returnNumber(){
return 5;
}

function iceCream(x,y,diameter, r,g,b,flavor){
  fill(170,120,35)//ice cream cone
  triangle(x,y, x+50,y,x+25,y+100)
  fill(r,g,b) // ice cream scoop color
  ellipse(x+25,y, diameter, diameter)
  text(flavor,x+25, y-50)
}

function rectRayDisplay(x,y,size,letter){
  fill(245,245,60)
  rect(x,y,size,size)

  for(let i=0; i<size; i+=10){ //if i += 1 the lines come together
    line(x,y,mouseX+i, mouseY+i)
  }
  fill(0)
  text(letter,x,y)
}

function mousePressed()
  {
    toggle = !toggle;
  }
