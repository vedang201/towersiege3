const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var standObject;

var blockObject1,blockObject2,blockObject3,blockObject4,blockObject5,blockObject6,blockObject7;
var blockObject2_1, blockObject2_2,blockObject2_3,blockObject2_4,blockObject2_5;
var blockObject3_1,blockObject3_2,blockObject3_3;
var blockObject4_1;
var rockObject;
var launcher;
var gameScore;

function setup() {
  createCanvas(1200,1200);
  
  engine = Engine.create();
  world = engine.world;
  
  standObject = new Ground(700,400,400,15); 
  blockObject1 = new Box(550,350,50,50);
  blockObject2 = new Box(600,350,50,50);
  blockObject3 = new Box(650,350,50,50);
  blockObject4 = new Box(700,350,50,50);
  blockObject5 = new Box(750,350,50,50);
  blockObject6 = new Box(800,350,50,50);
  blockObject7 = new Box(850,350,50,50);

  blockObject2_1 = new Box(600,300,50,50);
  blockObject2_2 = new Box(650,300,50,50);
  blockObject2_3 = new Box(700,300,50,50);
  blockObject2_4 = new Box(750,300,50,50);
  blockObject2_5 = new Box(800,300,50,50);

  blockObject3_1 = new Box(650,250,50,50);
  blockObject3_2 = new Box(700,250,50,50);
  blockObject3_3 = new Box(750,250,50,50);

  blockObject4_1 = new Box(700,200,50,50);

  rockObject = new Stone(200,200,30,30);

  launcher = new Slingshot(rockObject.body,{x:220,y:200})



  Engine.run(engine);

}

function draw() {
  background(120);  



  standObject.display();
  blockObject1.display();
  blockObject2.display();
  blockObject3.display();
  blockObject4.display();
  blockObject5.display();
  blockObject6.display();
  blockObject7.display();

  blockObject2_1.display();
  blockObject2_2.display();
  blockObject2_3.display();
  blockObject2_4.display();
  blockObject2_5.display();

  blockObject3_1.display();
  blockObject3_2.display();
  blockObject3_3.display();

  blockObject4_1.display();

  launcher.display();
  rockObject.display();

}
function mouseDragged(){
    
  Matter.Body.setPosition(rockObject.body, {x:mouseX , y:mouseY});
  
}
function mouseReleased(){

launcher.fly();
//Matter.Body.setStatic(rockObjectObject,false);
//Matter.Body.setPosition(rockObject,{x:100,y:100});
}	
function keyPressed(){

if(keyCode===32){

  launcher.attach(rockObject.body);

}


}
function score(){




  
}
