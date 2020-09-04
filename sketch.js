
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,box1,box2,box3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,680,800,20);
	ball=new Paper(10,600);
	box1=new Box(500,640,20,100);
	box2=new Box(700,640,20,100);
	box3=new Box(600,680,200,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  ball.display();
  box3.display();
  box1.display();
  box2.display();
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,{x:ball.body.position.x,y:ball.body.position.y},{x:85,y:-85})
	}
}

