function setup(){
 createCanvas(800,800)
 background (100,0,0)
 rectMode(CENTER)
 noFill();
}

function draw(){
  /*for (let i = 0; i < width; i = i + 50){
    line(i,0,i,height);
  }

  for (i = 0; i < 800 ; i +20){
    rect(400,400,i,i)
  }*/
 for(let i = 0; i< width; i += 50)
 {
  rect(width/2,height/2,i , i);
 }

 //or starting from outside
 for(let i = width; i>= 0; i -= 20)
  {
    fill(i-90,i+50,i+30)
   rect(width/2,height/2,i , i);
  }
}

