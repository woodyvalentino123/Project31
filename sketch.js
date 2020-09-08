
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
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
     }
     for (var l=0; l<=width;l = l+10){
      plinkos.push(new Plinko(k,50,radius))
      }

      
	Engine.run(engine);
  
}


function draw() {
  background("black");
  ground.display();
  ground1.display1();
  for (i = 1; i<= division.lenght; i = i+1){
 division [i].display();
  }
  for (j = 1; j<= particles.lenght; j = j+1){
  particles[j].display();
  }
  for (p = 1; p<= plinkos.lenght; p = p+1){
  plinkos[p].display();
  }

  
  drawSprites();
 
}
