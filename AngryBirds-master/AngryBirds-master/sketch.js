const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1, box2, box3, box4, box5, ground1, pig1,pig2,pig3 ;
var log1, log2, log3, log4,log5 ;
var bird;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(600,390,1200,10);


    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);
   
    pig2 = new Pig(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Birds(200,200,55,55);
}

function draw() {
  background(0);  
  Engine.update(engine);
  /*
  console.log(box1.body.position.x);
  console.log(box1.body.position.y);
  console.log(box2.body.position.x);
  console.log(box2.body.position.y);
  */
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  pig2.display();
  ground1.display();
  pig1.display();
  log1.display();
  //pig2.display();
  pig3.display();
 // log2.display();
  log3.display();
  log4.display();
  log5.display();
  bird.display();
}