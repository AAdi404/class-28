const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine;
var world;
var ground;
var bird;
//var woodenlog;
var slingshot;
var pig1;
var pig2;
var log1;
var log2;
var log3;
var log4;
var box1;
var box2;
var box3;
var box4;
var box5;
var backgroundImage;
function preload(){
backgroundImage=loadImage("sprites/bg.png");
}
function setup(){
var canvas=createCanvas(1200,400);
engine=Engine.create();
world=engine.world;
ground=new Ground(600,400,1200,20);
bird=new Bird(100,100);
//woodenlog=new Log(230,180,80,PI/2);
slingshot=new Slingshot(bird.body,{x:200,y:100});
pig1=new Pig(810,350);
pig2=new Pig(810,220);
log1=new Log(810,260,300,PI/2);
log2=new Log(810,180,300,PI/2);
log3=new Log(760,120,150,PI/7);
log4=new Log(870,120,150,-PI/7);
box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
box3=new Box(700,240,70,70);
box4=new Box(920,240,70,70);
box5=new Box(810,160,70,70);
}
function draw(){
background(backgroundImage);
Engine.update(engine);
console.log(box2.body.position.x);
console.log(box2.body.position.y);
console.log(box2.body.angle);
ground.display();
bird.display();
//woodenlog.display();
slingshot.display();
pig1.display();
pig2.display();
log1.display();
log2.display();
log3.display();
log4.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
}
function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingshot.fly()
}