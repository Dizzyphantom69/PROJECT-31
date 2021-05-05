
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var world;
var drop;
var ground;
drops=[]

function preload(){
  boyImage = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png",
  "walking_4.png","walking_3.png","walking_2.png","walking_1.png");
  thunderImage = loadAnimation("1.png","2.png","3.png","4.png");
    
}

function setup(){
	createCanvas(1300, 500);
	engine = Engine.create();
	world = engine.world;
  boy = createSprite(650,310);
  boy.addAnimation("Walking",boyImage);
  boy.scale=0.5;
 
    
   
   ground = createSprite(650,490,1300,20); 

   Engine.run(engine);
    
}

function draw(){

    background("black");
    thunderss();
    Engine.update(engine)
    
    if(frameCount%40 === 0){
      var posX=Math.round(random(100,1100)) 
      drop = new Drop(posX,50,5);
      drops.push(drop); 
   } 
   for(var i=0; i< drops.length; i++){ 
     drops[i].display(); 
   }


  //drop.display(); 
  
  drawSprites();
}   
function thunderss(){
  if(frameCount%150===0){

    thunder=createSprite(Math.round(random(200,1100)),100);
    thunder.addAnimation("thunder",thunderImage);
    thunder.lifetime = 50;
    thunder.scale = 0.7;


  }


}
