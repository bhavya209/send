var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score

var boy , boy_running , boy_collided
var road, road_Image , invisible_road






function preload(){
 boy_running = loadAnimation("run_1.png","run_2.png","run_3.png","run_4.png","run_5.png","run_6.png","run_7.png","run_8.png")
 boy_collided = loadAnimation("collieded.png")

 road_Image = loadImage("Road.jpg")


}

function setup() {
 createCanvas(800,800)

 boy = createSprite(100,600,40,100)
 boy.addAnimation("Runnig",boy_running)
 boy.addAnimation("Collieded".boy_collided)
 boy.scale = 0.5

 road = createSprite(400,400)
 road.addImage("Road.jpg",road_Image)
 road.x = road.width / 2
 road.velocityX = -4
 road.scale = 2
 

 invisible_road = createSprite(400,410,40,75)
 invisible_road.visible = false;

}

function draw() {
 

    if(gameState === PLAY){
     //move the ground
     road.velocityX = -(4+3*score/100);
     //scoring
     score = score + Math.round(frameCount/60);
    
     if (road.x < 0){
      road.x = road.width/2;
     }

     //jump when the space key is pressed
     if(keyDown("space") && boy.y >= 100) {
     boy.velocityY = -12;
     }

     //add gravity
    boy.velocityY = boy.velocityY + 0.8

    
    }














    drawSprites();
}