var iss,spacecraft;
var hasDoked = false;
var issimg,s1,s2,s3,s4,back;

function preload() {
  issimg = loadImage("iss.png");
  s1 = loadImage("spacecraft1.png");
 s2 = loadImage("spacecraft2.png");
  s3 = loadImage("spacecraft3.png");
  s4 = loadImage("spacecraft4.png");
  back = loadImage("space.jpg");
 }

function setup() {
  createCanvas(600,350);

  spacecraft = createSprite(285,240,50,25);
  spacecraft.addImage(s1);
  spacecraft.scale = 0.15
  //"iss",
  iss = createSprite(330,130,75,50);
  iss.addImage(issimg);
  iss.scale = 0.5;
}

function draw() {
  background(back);  
  spacecraft.addImage(s1);
  
 
  if(!hasDoked){
    spacecraft.x = spacecraft.x + random(-1,1);
  }
 if (keyDown("UP_ARROW")){
  spacecraft.y = spacecraft.y-2;
 }

 if (keyDown("DOWN_ARROW")){
  spacecraft.y = spacecraft.y+2;
  spacecraft.addImage(s1);
}
  if (keyDown("RIGHT_ARROW")){
    spacecraft.addImage(s3);
    spacecraft.x = spacecraft.x+2;
  }
    if (keyDown("LEFT_ARROW")){
      spacecraft.addImage(s4);
      spacecraft.x = spacecraft.x-2; 
    }
    if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10))
    { hasDocked = true; textSize(25);
       fill("white");
        text("Docking Successful!", 200, 300); 
      }
              drawSprites();
}