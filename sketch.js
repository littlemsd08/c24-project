const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var dust1,dust2,dust3;
var ground;
var paper;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
  dust1=new Bin(892,550,20,200)
  dust2=new Bin(1000,640,200,20)
  dust3=new Bin(1110,550,20,200)
ground=new Ground(800,670,1600,20)
paper=new Paper(400,650,40)
  
var render=Render.create({
element:document.body,
engine:engine,
options:{

width:1200,
height:700,
wireframes:false


}


})








Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display()
  ground.display()
  dust1.display()
 dust2.display()
dust3.display()
}
function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});

}



}


