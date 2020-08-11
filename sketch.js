const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const render = Matter.Render

var engine, world;

var gnd;
var turn = 0;
var division,disvision2,division3,division4,division5,division6;

var particle1,particle2,particle3,particle4,particle5,particle6,particle7,particle8,particle9,particle10;
var particle11,particle12,particle13,particle14,particle15,particle16,particle17,particle18,particle19,particle20;
var particle21,particle22,particle23,particle24,particle25,particle26,particle27,particle28,particle29,particle30;
var particle31,particle32,particle33,particle34,particle35,particle36,particle37,particle38,particle39,particle40;
var particle41,particle42,particle43,particle44,particle45,particle46,particle47,particle48,particle49,particle50;

var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10,plinko11;
var plinko12,plinko13,plinko14,plinko15,plinko16,plinko17,plinko18,plinko19,plinko20,plinko21,plinko22;
var plinko23,plinko24,plinko25,plinko26,plinko27,plinko28,plinko29,plinko30,plinko31,plinko32,plinko33;
var plinko34,plinko35,plinko36,plinko37,plinko38,plinko39,plinko40,plinko41,plinko42,plinko43,plinko44;

var particles = [];
var divisionHeight = 300;

function preload()
{
	
}
function setup() {
    createCanvas(480,800);
    engine = Engine.create();
  world = engine.world;
    
  Engine.run(engine);
   
 gnd = new BaseClass(240,780,480,15);
 division6 = new Division(405,630,5,300)
 division5 = new Division(325,630,5,300);
 division4 = new Division(245,630,5,300);
 division3 = new Division(165,630,5,300);
 division2 = new Division(85,630,5,300);
 division = new Division(5,630,5,300);

 plinko1 = new Plinko(60,400,10);
 plinko2 = new Plinko(120,400,10);
 plinko3 = new Plinko(180,400,10);
 plinko4 = new Plinko(240,400,10);
 plinko5 = new Plinko(300,400,10);
 plinko6 = new Plinko(360,400,10);
 plinko7 = new Plinko(0,400,10);
 plinko8 = new Plinko(420,400,10);

 plinko9 = new Plinko(0,350,10);
 plinko10 = new Plinko(60,350,10);
 plinko10 = new Plinko(120,350,10);
 plinko11 = new Plinko(180,350,10);
 plinko12 = new Plinko(240,350,10);
 plinko13 = new Plinko(300,350,10);
 plinko14 = new Plinko(360,350,10);
 plinko15 = new Plinko(420,350,10);
 plinko16 = new Plinko(60,350,10); 

 plinko17 = new Plinko(0,300,10);
 plinko18 = new Plinko(60,300,10);
 plinko19 = new Plinko(120,300,10);
 plinko20 = new Plinko(180,300,10);
 plinko21 = new Plinko(240,300,10);
 plinko22 = new Plinko(300,300,10);
 plinko23 = new Plinko(360,300,10);
 plinko24 = new Plinko(420,300,10);
 plinko25 = new Plinko(60,300,10); 

 plinko26 = new Plinko(0,250,10);
 plinko27 = new Plinko(60,250,10);
 plinko28 = new Plinko(120,250,10);
 plinko29 = new Plinko(180,250,10);
 plinko30 = new Plinko(240,250,10);
 plinko31 = new Plinko(300,250,10);
 plinko32 = new Plinko(360,250,10);
 plinko33 = new Plinko(420,250,10);

 plinko34 = new Plinko(0,200,10); 
 plinko35 = new Plinko(60,200,10); 
 plinko36 = new Plinko(120,200,10); 
 plinko37 = new Plinko(180,200,10); 
 plinko38 = new Plinko(240,200,10); 
 plinko39 = new Plinko(300,200,10); 
 plinko40 = new Plinko(360,200,10); 
 plinko41 = new Plinko(420,200,10); 
 plinko42 = new Plinko(480,200,10); 

 particle1 = new Particle(random(0,480),random(-10,-30),10);
 particle2 = new Particle(random(0,480),random(-10,-30),10);
 particle3 = new Particle(random(0,480),random(-10,-30),10);
 particle4 = new Particle(random(0,480),random(-10,-30),10);
 particle5 = new Particle(random(0,480),random(-10,-30),10);
 particle6 = new Particle(random(0,480),random(-10,-30),10);
 particle7 = new Particle(random(0,480),random(-10,-30),10);
 particle8 = new Particle(random(0,480),random(-10,-30),10);
 particle9 = new Particle(random(0,480),random(-10,-30),10);
 particle10 = new Particle(random(0,480),random(-10,-30),10);

 particle11 = new Particle(random(0,480),random(-10,-30),10);
 particle12 = new Particle(random(0,480),random(-10,-30),10);
 particle13 = new Particle(random(0,480),random(-10,-30),10);
 particle14 = new Particle(random(0,480),random(-10,-30),10);
 particle15 = new Particle(random(0,480),random(-10,-30),10);
 particle16 = new Particle(random(0,480),random(-10,-30),10);
 particle17 = new Particle(random(0,480),random(-10,-30),10);
 particle18 = new Particle(random(0,480),random(-10,-30),10);
 particle19 = new Particle(random(0,480),random(-10,-30),10);
 particle20 = new Particle(random(0,480),random(-10,-30),10);


 particle21 = new Particle(random(0,480),random(-10,-30),10);
 particle22 = new Particle(random(0,480),random(-10,-30),10);
 particle23 = new Particle(random(0,480),random(-10,-30),10);
 particle24 = new Particle(random(0,480),random(-10,-30),10);
 particle25 = new Particle(random(0,480),random(-10,-30),10);
 particle26 = new Particle(random(0,480),random(-10,-30),10);
 particle27 = new Particle(random(0,480),random(-10,-30),10);
 particle28 = new Particle(random(0,480),random(-10,-30),10);
 particle29 = new Particle(random(0,480),random(-10,-30),10);
 particle30 = new Particle(random(0,480),random(-10,-30),10);

 particle31 = new Particle(random(0,480),random(-10,-30),10);
 particle32 = new Particle(random(0,480),random(-10,-30),10);
 particle33 = new Particle(random(0,480),random(-10,-30),10);
 particle34 = new Particle(random(0,480),random(-10,-30),10);
 particle35 = new Particle(random(0,480),random(-10,-30),10);
 particle36 = new Particle(random(0,480),random(-10,-30),10);
 particle37 = new Particle(random(0,480),random(-10,-30),10);
 particle38 = new Particle(random(0,480),random(-10,-30),10);
 particle39 = new Particle(random(0,480),random(-10,-30),10);
 particle40 = new Particle(random(0,480),random(-10,-30),10);

 particle41 = new Particle(random(0,480),random(-10,-30),10);
 particle42 = new Particle(random(0,480),random(-10,-30),10);
 particle43 = new Particle(random(0,480),random(-10,-30),10);
 particle44 = new Particle(random(0,480),random(-10,-30),10);
 particle45 = new Particle(random(0,480),random(-10,-30),10);
 particle46 = new Particle(random(0,480),random(-10,-30),10);
 particle47 = new Particle(random(0,480),random(-10,-30),10);
 particle48 = new Particle(random(0,480),random(-10,-30),10);
 particle49 = new Particle(random(0,480),random(-10,-30),10);
 particle50 = new Particle(random(0,480),random(-10,-30),10);
 
}

function draw() {
  rectMode(CENTER);
  background("black"); 
  
  
  
  gnd.display();
  
  
  


  division.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display(); 
  division6.display();
 
  plinko1.display();
  plinko2.display()
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();

  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();

  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();

  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();

  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();
  plinko41.display();

  particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  particle7.display();
  particle8.display();
  particle9.display();
  particle10.display();

   particle11.display();
   particle12.display();
   particle13.display();
   particle14.display();
   particle15.display();
   particle16.display();
   particle17.display();
   particle18.display();
   particle19.display();
   particle20.display();

   particle21.display();
   particle22.display();
   particle23.display();
   particle24.display();
   particle25.display();
   particle26.display();
   particle27.display();
   particle28.display();
   particle29.display();
   particle30.display();

   particle31.display();
   particle32.display();
   particle33.display();
   particle34.display();
   particle35.display();
   particle36.display();
   particle37.display();
   particle38.display();
   particle39.display();
   particle40.display();

   particle41.display();
   particle42.display();
   particle43.display();
   particle44.display();
   particle45.display();
   particle46.display();
   particle47.display();
   particle48.display();
   particle49.display();
   particle50.display();
    
  drawSprites();
  
}