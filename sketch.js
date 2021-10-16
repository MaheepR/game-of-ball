
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var base1,base2,base3,base4;
var ball;
var bg;

function preload(){
bg=loadImage("background.gif")
}

function setup() {
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(398,690,800,15);

  base1=new Base(100,575,100,80);
  base2=new Base(640,475,100,80);
  base3=new Base(400,300,100,80);
  base4=new Base(600,100,100,80);

  var ball_options={
		isStatic:false,
		restitution:0.95,
		friction:1.0,
		density:1.2,
	}

	//Create the Bodies Here.
	ball=Bodies.circle(400,650,20,ball_options);
	World.add(world,ball);
  
}


function draw() 
{
  background(bg);
  Engine.update(engine);

  ground.display();

  base1.display();
  base2.display();
  base3.display();
  base4.display();


  ellipse(ball.position.x,ball.position.y,50);
 
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:10,y:-70})
	}
}


