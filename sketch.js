/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperWaste;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperWaste = new Paper(650,200);

	
  
}


function draw() {
  background(0);
  Engine.update(engine);

  paperWaste.display();

 
}
*/

var HTD1, HTD2, HTD3;
var pic1, pic2, pic3;

function preload(){
  HTD1 = loadImage("HTD_gif(3).png");
  HTD2 = loadImage("HTD_gif(2).webp");
  HTD3 = loadImage("HTDImg(1).jpg");
}

function setup(){
  createCanvas(600, 600);
  
 
}

function draw(){
  background("black");
  
  if(keyWentDown(RIGHT_ARROW)){
    pic1 = createSprite(500, 500, 100, 100);
    pic1.addImage(HTD1);
    }

  if(keyWentDown(DOWN_ARROW)){
     pic2 = createSprite(100, 100, 100, 100);
  pic2.addImage(HTD2);
  }

  if(keyDown(UP_ARROW)){
    textSize(18);
    fill("red");
    stroke("green");
    strokeWeight(1);
    text("Thank you for being such an amazing teacher!!!", 200, 100);
  }

  if(keyDown(LEFT_ARROW)){
    pic3 = createSprite(150, 450, 50, 50);
    pic3.addImage(HTD3);

    textSize(18);
    fill("white");
    stroke("blue");
    strokeWeight(1);
    text("HAPPY TEACHERS DAY!!!", 300, 175);
  }

  drawSprites();
}