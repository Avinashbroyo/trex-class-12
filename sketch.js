var cloud,cloudimage
var trex ,trex_running,edges
var ground,groundimage,invisibleg;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimage=loadImage("ground2.png")
  cloudimage=loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,150,50,50);
 trex.addAnimation("running",trex_running)
 edges=createEdgeSprites()
 trex.scale=0.5
 ground=createSprite(300,180,600,10)
 ground.velocityX=-3
 ground.addImage(groundimage)
invisibleg=createSprite(300,185,600,5)
invisibleg.visible=false
}

function draw(){
  background("white")
drawSprites()  
//console.log(trex.y)
//when pressing space the trx will jmp
if(keyDown("space")&& trex.y>159){
 trex.velocityY=-9
  
}
//adding gravity
trex.velocityY=trex.velocityY+0.5
//making ground infinite
if(ground.x<0){
  ground.x=ground.width/2
}
spawntheclouds()
trex.collide(invisibleg)
//console.log(World.frameCount)
}
function spawntheclouds(){
if(frameCount%90===0){

cloud=createSprite(600,100,20,20)
cloud.addImage(cloudimage)
cloud.velocityX=-3
cloud.y=Math.round(random(10,100))
console.log(trex.depth)
console.log(cloud.depth)
cloud.depth=trex.depth
trex.depth=trex.depth+1
}
}