const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground, ground1, ground2,ground3;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10;
var bl1, bl2, bl3, bl4, bl5, bl6, bl7, bl8, bl9, bl10;
var polygon;
var string;

function setup() {
  createCanvas(1250, 550);
  engine = Engine.create();
  world = engine.world;
  ground3 = new Ground(625, 548, 1250, 5);
  ground2 = new Ground(1000, 500, 250, 10);
  block1 = new Box(980, 480, 50, 50);
  block2 = new Box(990, 480, 50, 50);
  block3 = new Box(1000, 480, 50, 50);
  block4 = new Box(1010, 480, 50, 50);
  block5 = new Box(985, 450, 50, 50);
  block6 = new Box(995, 450, 50, 50);
  block7 = new Box(1005, 450, 50, 50);
  block8 = new Box(990, 420, 50, 50);
  block9 = new Box(1000, 420, 50, 50);
  block10 = new Box(995, 380, 50, 50);
  ground = new Ground(700, 300, 250, 10);
  b1 = new Box(680, 280, 50, 50);
  b2 = new Box(690, 280, 50, 50);
  b3 = new Box(700, 280, 50, 50);
  b4 = new Box(710, 280, 50, 50);
  b5 = new Box(685, 250, 50, 50);
  b6 = new Box(695, 250, 50, 50);
  b7 = new Box(705, 250, 50, 50);
  b8 = new Box(680, 220, 50, 50);
  b9 = new Box(700, 220, 50, 50);
  b10 = new Box(690, 190, 50, 50);
  ground1 = new Ground(1100, 250, 250, 10);
  bl1 = new Box(1090, 230, 50, 50);
  bl2 = new Box(1100, 230, 50, 50);
  bl3 = new Box(1110, 230, 50, 50);
  bl4 = new Box(1120, 230, 50, 50);
  bl5 = new Box(1095, 200, 50, 50);
  bl6 = new Box(1105, 200, 50, 50);
  bl7 = new Box(1115, 200, 50, 50);
  bl8 = new Box(1100, 170, 50, 50);
  bl9 = new Box(1110, 170, 50, 50);
  bl10 = new Box(1105, 140, 50, 50);
  polygon = new  Polygon(200,200,20);
  string = new String(polygon.body,{x:300,y:225});
  
}
function draw() {
  background("#382C2C");
  Engine.update(engine);

  ground.display();
  ground1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  bl1.display();
  bl2.display();
  bl3.display();
  bl4.display();
  bl5.display();
  bl6.display();
  bl7.display();
  bl8.display();
  bl9.display();
  bl10.display();
  polygon.display();
  string.display();

}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{ x: mouseX, y: mouseY });
}

function mouseReleased() {
  string.fly()
}
