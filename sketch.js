const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImage;
var basket,basketImage;

function preload()
{
	boyImage=loadImage("boy.png");
	gardenImage=loadImage("garden.jpg")
}

function setup() {
	createCanvas(1500, 800);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,height-10,1500,20);
	tree=new Tree(width-410,height-380,800,800)
	boy=createSprite(width-1300,height-110,10,10);
	boy.addImage(boyImage)
	boy.scale=0.15
	stone1=new Stone(width-1380,height-190,30)
	connection=new Link(stone1.body,{x:125,y:600})
	mango1=new Mango(width-700,height-500,30)
	mango2=new Mango(width-600,height-530,30)
	mango3=new Mango(width-500,height-560,30)
	mango4=new Mango(width-560,height-660,30)
	mango5=new Mango(width-450,height-450,30)
	mango6=new Mango(width-300,height-500,30)
	mango7=new Mango(width-600,height-400,30)
	mango8=new Mango(width-100,height-450,30)
	mango9=new Mango(width-450,height-660,30)
	mango10=new Mango(width-300,height-700,30)
	mango11=new Mango(width-200,height-500,30)
	mango12=new Mango(width-370,height-600,30)
	mango13=new Mango(width-250,height-400,30)
	mango14=new Mango(width-250,height-600,30)

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(gardenImage);

	detectCollision(stone1,mango1);
 	detectCollision(stone1,mango2);
	detectCollision(stone1,mango3);
	detectCollision(stone1,mango4);
	detectCollision(stone1,mango5);
	detectCollision(stone1,mango6);
	detectCollision(stone1,mango7);
	detectCollision(stone1,mango8);
	detectCollision(stone1,mango9);
	detectCollision(stone1,mango10);
	detectCollision(stone1,mango11);
	detectCollision(stone1,mango12);
	detectCollision(stone1,mango13);
	detectCollision(stone1,mango14);
  
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	mango13.display();
	mango14.display();
	ground.display();
	drawSprites();

	fill("orange")
	textSize(30)
	text("Drag the stone using the mouse and release the mouse to throw the stone.",width-1480,height-760)
	fill("red")
	textSize(30)
	text("Press Space to try again.",width-1480,height-730)
	
	connection.display();
	stone1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    connection.fly();
}

function detectCollision(stone1,Lmango){
	mangoBodyPosition=Lmango.body.position;
	stone1BodyPosition=stone1.body.position;
	var distance=dist(stone1BodyPosition.x,stone1BodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=Lmango.radius+stone1.radius){
	Matter.Body.setStatic(Lmango.body,false);
}
}

function keyPressed(){
if(keyCode===32){
	Matter.Body.setPosition(stone1.body,{x:120,y:610})
	connection.attach(stone1.body)
}
}