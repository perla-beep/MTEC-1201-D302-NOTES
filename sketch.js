let y = 0;

function setup(){
 createCanvas(800,800)
 background (100,0,0)
}

function draw(){
  background (100,0,0)
  let diameter = 50;
  for(let x =0; x<= width; x+= diameter){
    ellipse(x,y,diameter,diameter)
  }
  y++

  if (y>= height + (diameter/2)){
    y=-diameter
  }
}

