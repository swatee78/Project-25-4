
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,paper,ground,dustbin;


function setup() {
	createCanvas(800, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,450,70);
    //paper.scale  = 0.1;
    ground = new Ground(400,500,800,20)
	Engine.run(engine);
  
 // box1 = new Dustbin(500,430,20,80);
  //box2 = new Dustbin(680,430,20,80)
 // box3 = new Dustbin(590,480,160,20)
  
dustbin = new Dustbin(500,340,120,150);
console.log(this.paperImage)

}


function draw() {
  rectMode(CENTER);
  background(230);

  paper.display();
  ground.display();
//box1.display();
//box2.display();
//box3.display();
dustbin.display();
 // drawSprites();
 
  

}

function keyPressed(){
 if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
 }
}

