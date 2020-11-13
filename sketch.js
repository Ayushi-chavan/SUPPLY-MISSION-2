var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	 
	engine = Engine.create();
	world = engine.world;

	 box1=new box(400,650,200,20)
	 box2=new box(300,610,20,100)
	 box3=new box(500,610,20,100)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	;
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  packageSprite.x=packageBody.position.x
  packageSprite.y=packageBody.position.y

  background(0);
 
  drawSprites();
  box1.display()
  box2.display()
  box3.display()
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
      Matter.Body.setStatic(packageBody,false)
	  setScale= 0.5
	 
  }
}



