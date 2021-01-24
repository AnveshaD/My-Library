var movingRect, fixedRect





function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.velocityY = 1;
  fixedRect = createSprite(400,400,50,30);
  fixedRect.velocityY = -1; 
}

function draw() {
  background(255,255,255);
  if(isTouching(movingRect,fixedRect))
  {
    movingRect.width = 10;
    fixedRect.width = 20;
  } 

  else{movingRect.shapeColor = "red";}
  bounceOff(movingRect,fixedRect);
  
  drawSprites();
}

 

