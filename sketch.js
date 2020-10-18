
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1,log2,log3;
var ground;
var ball1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    
	Engine.run(engine);
	
	ground = new log(400,490,800,20);
	log1 = new log(700,475,100,10);
	log2 = new log(650,430,10,100);
	log3 = new log(750,430,10,100);  
	ball1 = new ball(100,430,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 log1.display();
 ground.display();
 log2.display();
 log3.display();
 ball1.display();
}

function keyPressed() {
 if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(ball1.body, ball1.body.position, {x:.02, y:-.08})
 }



}

