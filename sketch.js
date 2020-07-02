var Mrect, Frect;

function setup() {
  createCanvas(400,400);
  Mrect = createSprite(50, 200, 50, 50);
  Frect = createSprite(350, 200, 50, 50);
  Mrect.shapeColor = "blue";
  Frect.shapeColor = "blue";
  Mrect.velocityX = 5;
  Frect.velocityX = -5;
  // Mrect.velocityY = -5;
  // Frect.velocityY = 5;
}

function draw() {
  background(255,255,255);  
   
  // Mrect.x = World.mouseX;
  // Mrect.y = World.mouseY;

  if(Mrect.x-Frect.x < Mrect.width/2+Frect.width/2 
    && Frect.x-Mrect.x < Mrect.width/2+Frect.width/2
    && Mrect.y-Frect.y < Mrect.width/2+Frect.width/2
    && Frect.y-Mrect.y < Mrect.width/2+Frect.width/2){
    Mrect.shapeColor = "red";
    Frect.shapeColor = "red";
  } else{
    Mrect.shapeColor = "blue";
    Frect.shapeColor = "blue";
  }

    Bounce();
  drawSprites();
}
function Bounce(){
 if(Mrect.x-Frect.x < Mrect.width/2+Frect.width/2
  && Frect.x-Mrect.x < Mrect.width/2+Frect.width/2)  {
    Mrect.velocityX = Mrect.velocityX * (-1);
    Frect.velocityX = Frect.velocityX * (-1);
  }
  if(Mrect.y-Frect.y < Mrect.height/2+Frect.height/2
    && Frect.y-Mrect.y < Mrect.height/2+Frect.height/2){
      Mrect.velocityY = Mrect.velocityY * (-1);
      Frect.velocityY = Frect.velocityY * (-1);
    }
}