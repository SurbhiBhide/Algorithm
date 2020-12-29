var movingRect, fixedRect;

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,600);
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "darkblue";
  //movingRect.debug = true;
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "darkblue";
  //fixedRect.debug = true;

  gameObject1 = createSprite(100,100,50,50);

  gameObject2 = createSprite(200,100,50,50);

  gameObject3 = createSprite(300,100,50,50);

  gameObject4 = createSprite(400,100,50,50);
}

function draw() {
  background("pink"); 

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

var rtr_value = isTouching();
console.log("isTouching output" + rtr_value);

  if(isTouching(movingRect,gameObject1)){
 movingRect.shapeColor = "red";
 gameObject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "darkblue";
    gameObject1.shapeColor = "darkblue"; 
  }

  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
     object2.x - object1.x < object2.width/2 + object1.width/2 &&
     object1.y - object2.y < object2.height/2 + object1.height/2 && 
     object2.y - object2.y < object2.height/2 + object1.height/2){
  return true;
  background("pink");
  }
  else{
   return false;
    background("lightpink"); 
  }
}
