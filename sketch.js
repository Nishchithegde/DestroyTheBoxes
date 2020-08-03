const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("bg (5).jpg");
}

function setup(){
    var canvas = createCanvas(1350,636);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,height-100,300,20);

    box1 = new Box(600,height-110,30,30);
    box2 = new Box(630,height-110,30,30);
    box3 = new Box(660,height-110,30,30);
    box4 = new Box(690,height-110,30,30);
    box5 = new Box(570,height-110,30,30);
    box6 = new Box(540,height-110,30,30);
    box7 = new Box(510,height-110,30,30);
    box8 = new Box(612,height-150,30,30);
    box9 = new Box(642,height-150,30,30);
    box10 = new Box(582,height-150,30,30);
    box11 = new Box(552,height-150,30,30);
    box12 = new Box(522,height-150,30,30);
    box13 = new Box(672,height-150,30,30);
    box14 = new Box(600,height-190,30,30);
    box15 = new Box(630,height-190,30,30);
    box16 = new Box(570,height-190,30,30);
    box17 = new Box(540,height-190,30,30);
    box18 = new Box(660,height-190,30,30);
    box19 = new Box(612,height-230,30,30);
    box20 = new Box(642,height-230,30,30);
    box21 = new Box(582,height-230,30,30);
    box22 = new Box(552,height-230,30,30);
    box23 = new Box(600,height-270,30,30);
    box24 = new Box(630,height-270,30,30);
    box25 = new Box(570,height-270,30,30);
    box26 = new Box(612,height-310,30,30);
    box27 = new Box(582,height-310,30,30);
    box28 = new Box(600,height-350,30,30);

    bird = new Bird(100,100);
    slingShot = new SlingShot(bird.body,{x:200, y:300});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();

    bird.display();
    slingShot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
