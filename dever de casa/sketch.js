
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var chao_options={
	isStatic:true
}
var block1_options={
	restitution:0.5,
	friction:0.01,
	frictionAir:0
}
var block2_options={
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
}
var block3_options={
	restitution:0.1,
	friction:1,
	frictionAir:0.03
}
chao=Bodies.rectangle(400,650,800,20,chao_options)
World.add(world,chao)
	Engine.run(engine);
	block1=Bodies.circle(220,20,20,block1_options)
	World.add(world,block1)
	block2=Bodies.rectangle(110,50,20,20,block2_options)
	World.add(world,block2)
	block3=Bodies.rectangle(350,50,20,20,block3_options)
World.add(world,block3)
}


function draw() {
  rectMode(CENTER);
  background('green');
  Engine.update(engine)
rect(chao.position.x,chao.position.y,800,20)
 ellipse(block1.position.x,block1.position.y,30); 
 rect(block2.position.x,block2.position.y,50,50); 
 rect(block3.position.x,block3.position.y,100,50)

}



