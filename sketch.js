var r = 0;
var g = 150;
var b = 255;
function setup(){
  var canvas = createCanvas(600,400);
}
function draw(){
  r = map(mouseX,0,255,204,0);
  g = map(mouseX,0,50,205,50);
  b = map(mouseX,0,400,0,255);

  background(r,g,b);
  fill("Black");
  ellipse(mouseX,200,64,64);
}