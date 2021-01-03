const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Apple,AppleCut,Banana,BananaCut,Kiwi,KiwiCut,
Pineapple,PineappleCut,Strawberry,StrawberryCut,
Watermelon,WatermelonCut
var fruit
var FruitGroup = []


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    for (var i=0; i<=FruitGroup.length; i++){
        FruitGroup.push(new Fruit(random(0,1200),random(0,400)))
    }
    
}

function draw(){
    background("black");
    Engine.update(engine);
    for (var i=0; i<=FruitGroup.length; i++){
        FruitGroup[i].display()
    }
}
