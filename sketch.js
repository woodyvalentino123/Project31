const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Bodies;
var engine,world,d1,ground;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world
  ground = new Ground(400,380,800,30);
  d1 = new Division(100,390)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  drawSprites();
  ground.display();
  d1.display();
  
}