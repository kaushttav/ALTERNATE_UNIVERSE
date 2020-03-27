var sun,sun_image;
var backgroundImg;
var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var mercury_image,venus_image,earth_image,mars_image,jupiter_image,saturn_image,uranus_image,neptune_image;
function preload(){
  backgroundImg = loadImage("space.jpg")
  mercury_image = loadImage("mercury.png");
  venus_image = loadImage("venus.png");
  earth_image = loadImage("earth.png");
  mars_image = loadImage("mars.png");
  jupiter_image = loadImage("jupiter.png");
  saturn_image = loadImage("saturn.png");
  neptune_image = loadImage("neptune.png");
  uranus_image = loadImage("uranus.png");
  sun_image = loadImage("sun.png");
}
function setup() {
  createCanvas(800,500);
  sun = createSprite(400, 200, 50, 50);
  sun.shapeColor = "yellow";
  sun.addImage(sun_image);
  sun_image.resize(100,100);

  mercury = createSprite(200,230,20,20);
  mercury.addImage(mercury_image);
  mercury_image.resize(45,45);
  mercury.setCollider("circle",0,0,22);
  mercury.debug = true;

  venus = createSprite(250,330,26,26);
  venus.addImage(venus_image);
  venus_image.resize(60,60);
  venus.setCollider("circle",0,0,30);
  venus.debug = true;
  

  earth = createSprite(600,320,15,15);
  earth.addImage(earth_image);
  earth_image.resize(80,80);
  earth.setCollider("circle",0,0,38);
  earth.debug = true;
 

  mars = createSprite(115,320,40,40);
  mars.addImage(mars_image);
  mars_image.resize(85,85);
  mars.setCollider("circle",0,0,42);
  mars.debug = true;
  

  jupiter = createSprite(500, 80, 45, 45);
  jupiter.addImage(jupiter_image);
  jupiter_image.resize(120,120);
  jupiter.setCollider("circle",0,0,60);
  jupiter.debug = true;
  

  saturn = createSprite(650,200,25,25);
  saturn.addImage(saturn_image);
  saturn_image.resize(125,125); //no collider because of it's rings

  uranus = createSprite(400, 350, 45, 45);
  uranus.addImage(uranus_image);
  uranus_image.resize(85,85);
  uranus.setCollider("circle",0,0,42);
  uranus.debug = true;
 
  neptune = createSprite(250, 70 , 30, 30);
  neptune.addImage(neptune_image);
  neptune_image.resize(85,85);
  neptune.setCollider("circle",0,0,43);
  neptune.debug = true;
  
}

function draw() {
  background(backgroundImg);  
  if(frameCount%2===0){
    sun_image.width = sun_image.width + 1;
    sun_image.height = sun_image.height + 1;
  }
  if(ISTOUCHING1()){
    mercury.destroy();
  }
  if(ISTOUCHING2()){
    venus.destroy();
  }
  if(ISTOUCHING3()){
    earth.destroy();
  }
  if(ISTOUCHING4()){
    mars.destroy();
    sun.destroy();
  }
  if(ISTOUCHING5()){
    jupiter.destroy();
  }
  if(ISTOUCHING6()){
    saturn.destroy();
  }
  if(ISTOUCHING7()){
    uranus.destroy();
  }
  if(ISTOUCHING8()){
    neptune.destroy();
  }
 
  drawSprites();
}
function ISTOUCHING1(){
  if (sun.isTouching(mercury)){
    return true;
  }
}
function ISTOUCHING2(){
  if (sun.isTouching(venus)){
    return true;
  }
}
function ISTOUCHING3(){
  if (sun.isTouching(earth)){
    return true;
  }
}
function ISTOUCHING4(){
  if (sun.isTouching(mars)){
    return true;
  }
}
function ISTOUCHING5(){
  if (sun.isTouching(jupiter)){
    return true;
  }
}
function ISTOUCHING6(){
  if (sun.isTouching(saturn)){
    return true;
  }
}
function ISTOUCHING7(){
  if (sun.isTouching(uranus)){
    return true;
  }
}
function ISTOUCHING8(){
  if (sun.isTouching(neptune)){
    return true;
  }
}

