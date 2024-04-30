let webcam;
let walkers = [];
let scale = 18;


function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  webcam = createCapture(VIDEO);
  webcam.size(width/scale,height/scale);
  webcam.hide();
  for(i = 0; i < 100; i ++){
    let x = random(0, width);
    let y = random (0, height);
   
    walkers[i] = new Walker(x,y);
  }
 
  }



function draw() {

  webcam.loadPixels();
  for (x = 0; x < walkers.length; x++){
    walkers[x].step();
    walkers[x].show();
  }
}


class Walker {
  constructor (x,y){
    this.x = x;
    this.y = y;
   

  }

  step(){
    this.x += random(-1,1);
    this.y += random (-1,1);
  }

  show(){
    let pX = this.x/scale;
    let pY = this.y/scale;
    let pixelColour = webcam.get(pX,pY);
    strokeWeight(2);
    stroke(pixelColour[0], pixelColour[1], pixelColour[2], 120);
    point(this.x, this.y);
  }
}


