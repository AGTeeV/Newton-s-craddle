const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,50,230,20);
bob1=new bob(300,350,50);
bob2=new bob(350,350,50);
bob3=new bob(400,350,50);
bob4=new bob(450,350,50);
bob5=new bob(500,350,50);

 
 rope1=new rope(bob1.body,roofObject.body,-100, 0)
rope2=new rope(bob2.body,roofObject.body,-50, 0)
rope3=new rope(bob3.body,roofObject.body,0, 0)
rope4=new rope(bob4.body,roofObject.body,50, 0)
rope5=new rope(bob5.body,roofObject.body,100, 0)
	Engine.run(engine);
  
}


function draw() {
  background(100);

  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
roofObject.display();
 rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === LEFT_ARROW)
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 
