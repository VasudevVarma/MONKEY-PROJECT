var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,SurvivalTime;

function preload()
{  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup()
{
  createCanvas(400,200);
  
  ground=createSprite(200,180,400,10);
  ground.x=ground.width/2;
  
  monkey=createSprite(50,175,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.08;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
  SurvivalTime = 0;
}


function draw()
{
  background(180);
  
  text("SurvivalTime: "+ SurvivalTime, 170,25);
  
 SurvivalTime = SurvivalTime+ Math.round(getFrameRate()/60);
   
  if (ground.x < 0)
  {
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&&monkey.y>150)
    {
      monkey.velocityY=-13;
    }
  
   monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  banana();
  Obstacle();

  console.log(frameCount);
  
  drawSprites();
}

function banana()
{
  if(frameCount%80===0)
    {
      var banana=createSprite(400,Math.round(random(10,170)),10,10);
      banana.addImage(bananaImage);
      banana.velocityX=-5;
      banana.scale=0.08;
      banana.lifetime=100;
      FoodGroup.add(banana);
    }
}

function Obstacle()
{
  if(frameCount%300===0)
    {
      obstacle=createSprite(400,165,10,10);
      obstacle.addImage(obstacleImage);
      obstacle.velocityX=-5;
      obstacle.scale=0.08;
      obstacle.lifetime=100;
      obstacleGroup.add(obstacle);
    }
}

