const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = [];

function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
   
    man = new Umbrella(200,400);
   
    
}

function draw(){
    createCanvas(400,600);
    background("green");
    Engine.update(engine);
    man.display();
    var maxDrops = 100;
   // for(var k = 0)
   if(frameCount%90===0){
    drops.push(new Drop(random(0,400),random(0,400)));
}
    
    //drops.display();
}   

