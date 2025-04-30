
let drumLoop
let bass
let string

let drumMute = false
let bassMute = false

function preload(){
drumLoop = loadSound('audio/drumLoop.mp3')
bass = loadSound('audio/bass.mp3')
string = loadSound('audio/string.mp3')
}

function setup() {
  createCanvas(800, 800);
  strokeWeight(3)

  drumLoop.loop()
  bass.loop() // same beat overlapping
}

function draw() {
  background(178);
  
  if(drumMute){
    drumLoop.amp(0.0) // set volume to 0 no sound
  }
  else{
    drumLoop.amp(1.0)//full volume
    fill(220)
    rect(0,height/2,width,height)
  }
}

function mousePressed(){
  string.play()
}

function keyPressed(){
  if (key == 'a'){
    drumMute = !drumMute
  }
  else if (key == 's'){
    bassMute = !bassMute
  }
}
