
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
        
     

     for (var k=-75; k<width;k = k+80){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
     }
     for (var l=-40; l<=width;l = l+50){
      plinkos.push(new Plinko(l,75,radius))
      }

      for (var l=40; l<=width-10;l = l+50){
        plinkos.push(new Plinko(l,175,10))
      }
      for (var l=-40; l<=width;l = l+50){
        plinkos.push(new Plinko(l,275,radius))
        }
  
        for (var l=40; l<=width-10;l = l+50){
          plinkos.push(new Plinko(l,375,10))
        }
        
      
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  ground1.display1();
  for (var i = 1; i< division.length; i = i+1){
    console.log([i]);
    division[i].display();
 
  }
  if(frameCount %20===0){
    particles.push(new Particle(random(width/2-200,width/2+200),10,5));
  }
  for (var j = 1; j< particles.length; j = j+1){
  particles[j].display();
  }
  for (p = 1; p< plinkos.length; p = p+1){
  plinkos[p].display();
  }
  
 
  
  drawSprites();
 
}
