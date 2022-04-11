
var rocketImg, rocket;
var meteorImg,meteor,meteorsGroup;
var gameState ="play"
var gameState ="end";

function preload(){
meteorImg=loadImage("meteor.png");
rocketImg=loadImage("rocket.jpg");
meteorsGroup=new Group();
}

function setup() {
createCanvas(600,600);
rocket= createSprite(300,300,10,20);
rocket.addImage("rocket",rocketImg);
rocket.velocityY=1;
rocket.velocityX=0.6;
rocket.scale=0.5;
meteor=createSprite(300,300);
meteor.addImage("meteor",meteorImg)
meteor.scale=0.3;
meteor.velocityX=0.4;
meteor.velocityY=0.6;
}

function draw() {
    background(20);
    if(meteor.y >400){
        meteor.y=300;
    }
if (gameState==="play"){

 if(keyDown("left_arrow")) {
     rocket.x=rocket.x-3;
 }  
 if(keyDown("right_arrow")) {
     rocket.x=rocket.x+3;
 }
 if(keyDown("space")) {
     rocket.velocityY=-4;
 }
}
}
rocket.velocityY=rocket.velocityY+0.6;
if(meteorsGroup.isTouching(rocket)){
    rocket.velocityY=0;
}
if (meteorsGroup.isTouching(rocket)||rocket.y>600){
    rocket.destroy();
    gameState="end";
}

spawnMeteors();
drawSprites();

if(gameState==="end"){
    stroke("green");
    Fill("green");
    textSize(25);
    text("gameover",220,240);
}
function spawnMeteors(){
if (frameCount %230===0){
    var meteor= createSprite(+210,-45);
    meteor.addImage(meteorImg);
    meteor.x=Math.round(random(120,400));
    meteor.velocityY=0.5;
    meteor.lifetime=800;
    meteorsGroup.add(meteor);
}
}
function drawSprites(){
    rocket.velocityY=1;
    rocket.velocityX=0.6;
    meteor.velocityX=0.4;
    meteor.velocityY=0.6;
}