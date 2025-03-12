let state = "pregame" // storing our state as strings
let ellipseY = 0

function setup(){
createCanvas(500,500)
textAlign(CENTER)
textSize(35)
}

function draw(){
  if(state == "pregame"){
    preGame();
  }
  else if (state=="game"){
    game();
  }
  else if(state=="game over"){
    gameOver();
  }
}

function mousePressed(){
if (state=="pregame"){
  state="game"
}
else if(state=="game"){
  state=="pregame"
}
}

function preGame(){
  background(0,0,255)
  text("click to start", width/2, height/2);
}

function game(){
  background(0,255,0);
  text("what a fun game", width/2,height/2);
  ellipse(mouseX, ellipseY, 100,100);
  ellipseY++;

  if(ellipseY > height+50){
    state= "game over";
    ellipseY=0;

  }
}

function gameOver(){
  background(155,0,0)
  text("everyone loses",width/2,height/2)
  text("click to play again",width/2,height/2+50)
}