
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var dustbin1,dustbin2,dustbin3;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = new paper(100,500,30);
	dustbin1 = new bin(510,610,20,120);
	dustbin2 = new bin(600,660,200,20);
	dustbin3 = new bin(690,610,20,120);
	ground = new Ground(400,680,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
 
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:140,y:-140})
	}
}

