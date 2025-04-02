function setup(){
 createCanvas(800,800)
 rectMode(CENTER)
}

function draw(){
  background (100,0,0)

  let x = 50; // Local variable

  while(x < width){
    //this will always loop foreber
    ellipse (x,height/2,75,75)
    x+= 100; 
  }

  let y = 50

  while(y<height/2){
    rect(width/2,y,50,50)
    y+=55 //same as y = y +75
  }
}