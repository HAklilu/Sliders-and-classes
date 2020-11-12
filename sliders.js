let hSlider, sSlider, bSlider;
let slider;
const CIRCSPEED = 4;

class SimpleCirc {
  constructor() { //basically the __init__ function
     //NOTE: "this" instead of "self"
    this.xLoc = width * Math.random();
    this.yLoc = height * Math.random();
     
  }

  update() {
    
  }

  draw() {
    fill(slider.value(),100,100);
    ellipse(this.xLoc, this.yLoc, slider.value());
  }
}

let circlist = []

function setup() {
  createCanvas(900, 400);
  colorMode(HSB);
  hSlider = createSlider(0, 360, 0);
  hSlider.position(10, 10);
  sSlider = createSlider(0, 100, 0);
  sSlider.position(10, 30);
  bSlider = createSlider(0, 100, 0);
  bSlider.position(10, 50);
  slider = createSlider(10, 100, 0);
  slider.position(10, 350);
  
  
  for (i = 0; i < 6; i++) {
    circ = new SimpleCirc();
    circlist.push(circ);
  }
}

function draw() {
  background(hSlider.value(),sSlider.value(),bSlider.value());
  
  
  for (i of circlist) {
    i.update();
    i.draw();
  }
  fill(0,0,100);
  stroke(10);
  text('HUE',150,25);
  text('SATURATION',150,45);
  text('BRIGHTNESS',150,65);
}
