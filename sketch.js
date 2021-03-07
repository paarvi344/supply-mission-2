var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2,625, width,10);
	groundSprite.shapeColor=color(125)

    boxSprite=createSprite(width/2,620,200,20);
	boxSprite.shapeColor="red";

	box1Sprite=createSprite(width/2,620,100,10);
	box1Sprite.shapeColor="red";
	
	box2Sprite=createSprite(300,580,20,100);
	box2Sprite.shapeColor="red";

	box3Sprite=createSprite(500,580,20,100);
	box3Sprite.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 100 , {isStatic:true} );
 	World.add(world, ground);
	console.log(ground);

	box = Bodies.rectangle(width/2, 620, 100, 10 , {isStatic:true} );
 	World.add(world, box);
	console.log(box);


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	
 if (keyCode === DOWN_ARROW) {
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:false});
	World.add(world, packageBody);

  	packageSprite.x= packageBody.position.x 
  	packageSprite.y= packageBody.position.y 
	Engine.update(engine);
		
	 
	  
  }
}



