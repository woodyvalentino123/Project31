
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var division = [];
var divisionHeight = 300;
var radius = 10;


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
        
    // division = new Division(50,610,2,divisionHeight);

     for (var k=0; k<=width;k = k+80){
    division.push(new Division(k,height+divisionHeight/2,10,divisionHeight))
     }
     for (var l=0; l<=width;l = l+10){
      plinkos.push(new Plinko(k,50,radius))
      }

      for (var m=0; m<=700;m = m+1){
        particles.push(new Particle(m,1,10))
      }
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  ground1.display1();
  for (i = 1; i<= division.lenght; i = i+1){
 division.display([i]);
  }
  for (j = 1; j<= particles.lenght; j = j+1){
  particles.display([j]);
  }
  for (p = 1; p<= plinkos.lenght; p = p+1){
  plinkos.display([p]);
  }

  
  drawSprites();
 
}
