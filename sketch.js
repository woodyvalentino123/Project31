
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


var ground;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
     ground = new Ground(240,790);
       
     ground1 = new Ground(240,770);
    
     division = new Division(50,610,2,divisionHeight);

     for (var k=0; k<=width;k = k+80){
    division.push(new Division(k,height+divisionHeight/2,10,divisionHeight))
     }
     




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  ground1.display1();
  division.display();

  
  drawSprites();
 
}
