var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png","ghost-jumping.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.3;
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
    tower.y = 300
    }
  if (keyDown("right_arrow")){
    ghost.x=ghost.x+5
  }
  if (keyDown("left_arrow")){
    ghost.x=ghost.x-5 
  }
  if (keyDown("up_arrow")){
    ghost.velocityY=-5 
  }

  ghost.velocityY=ghost.velocityY+0.8
  spawnDoors()
  spawnClimbers()
  drawSprites()
}


function spawnDoors() {
  //write code here to spawn the doors
  if (frameCount % 220 === 0) {
    var doors = createSprite(200,-50);
    doors.x = Math.round(random(120,400));
    doors.addImage(doorImg);
    doors.scale = 0.5;
    doors.velocityY =1;

     //assign lifetime to the variable
     doors.lifetime = 800;
    
    //add each door to the group
    doorsGroup.add(doors);
  }
}

function spawnClimbers() {
  //write code here to spawn the climbers
  if (frameCount % 220 === 0) {
    var climbers = createSprite(200,-50);
    climbers.x = Math.round(random(120,400));
    climbers.addImage(doorImg);
    climbers.scale = 0.5;
    climbers.velocityY =1;

     //assign lifetime to the variable
     climbers.lifetime = 800;
    
    //add each door to the group
    climbersGroup.add(climbers);
  }
}

if(doorsGroup.isTouching(ghost)){
  //ghosts.velocityY = -12;
  jumpSound.play();
  gameState = END;
  dieSound.play()

if (gameState === END) {
  ghost.velocityX = 0;
doors.velocityY = 0;
climbers.velocityY = 0;
tower.velocityX = 0;
}

if(canvasBorder.isTouching(ghost)){
  //ghost.velocityY = -12;
  jumpSound.play();
  gameState = END;
  dieSound.play();
}
}