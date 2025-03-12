let scene = 3; // change this to go through scenes
let expand = 0;

function setup(){
  createCanvas(500,500)
}

function draw(){
  background(0)
  if (scene!= 3){
  expand = 0;
}

  if(scene ==1){
    doScene1();
  }
  else if(scene==2){
    doScene2();
  }
  else if (scene==3){
    doScene3();
  }

}

function doScene1(){
  ellipse(width/2,height/2,100,100)
}

function doScene2(){
  ellipse(width/2,height/2,10,10)
}

function doScene3(){//spiral animation
  translate(width/2,height/2)

  for(let i=0; i <200; i++){
    rotate(0.1)
    ellipse(i+expand,0+expand,10,10)
  }

  expand +=0.2;
}