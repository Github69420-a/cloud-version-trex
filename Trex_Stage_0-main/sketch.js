



var trex ,trex_running;
var ground;
var invisibleGround;
var cloud;
var cloudSprite;
var cloudY;
var cloudGroup;

function preload()
{
  trex_running = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  ground = loadImage("ground2.png");
  cloud = loadImage("cloud.png");
}

function setup()
{
  createCanvas(600,200)
  //create a trex sprite
  trex = createSprite(200, 150, 100, 100);
  trex.addAnimation("hello", trex_running);
  trex.scale = (0.5);
  ground1 = createSprite(300, 180, 100, 100);
  ground1.addImage("hello", ground);
  invisibleGround = createSprite(200, 190, 100, 5);
  invisibleGround.visible = false;
  cloudGroup = createGroup();
  /*for (var i = 0; i <= 5; i++) 
  {
    clouds();
  }*/
}
function draw()
{
  background("white");
  drawSprites();
  text(mouseX +","+ mouseY, mouseX, mouseY);
  jump();
  clouds();
  trex.collide(invisibleGround);
  /*if (trex.isTouching(ground1)) {
    trex.velocity = 0
  }*/
  ground1.velocityX = -2;
  if (ground1.x < 0) {
    ground1.x = ground.width / 2;
  }
}

function jump() 
{
  if (keyWentDown("space") && trex.y >= 125) {
      trex.velocityY = -10;
  }
  trex.velocityY += 0.65;
}

function clouds() 
{
  if (frameCount % 60 == 0) {
  cloudY = Math.round(random(1, 50));
  console.log(cloudX);
  console.log(cloudY);
  cloudSprite = createSprite(550, cloudY, 25, 15);
  cloudGroup.add(cloudSprite);
  cloudSprite.scale = 0.5;
  cloudSprite.addImage(cloud);
  trex.depth = cloudSprite.depth + 1;
  cloudSprite.velocityX = -2;
  }
}