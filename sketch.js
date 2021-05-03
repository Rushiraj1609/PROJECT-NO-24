const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var ground2Img;



function preload(){
    ground2Img=loadImage("ground2.png");
    
}


function setup(){
    var canvas = createCanvas(1350,650);
    engine = Engine.create();
    world = engine.world;

    
    
    plane = new Plane (650,650,1450,50);
    plane2=new Plane2(840,180,300,30);
    hammer = new Hammer(10,100);
    


    box1= new Box(955,500,30,140);
    box2= new Box(1135,500,30,140);
    ball1= new Ball(1042,500,50,50);
    box3= new Box(1045,350,300,30);
    box4= new Box(1000,330,30,80);
    box5= new Box(1090,330,30,80);

    boxes1=new Ball2(780,140,50,50);
    boxes2=new Ball2(820,140,50,50);
    boxes3=new Ball2(850,140,50,50);
    boxes4=new Ball2(880,140,50,50);

    circle1=new Circle(800,120,40,40);
    circle2=new Circle(830,120,40,40);
    circle3=new Circle(840,120,40,40);

    square1=new Square(480,480,20,20);
    square2=new Square(510,450,20,20);
    square3=new Square(550,430,20,20);
    square4=new Square(580,400,20,20);
    square5=new Square(460,420,20,20);
   
    



   
   

   
    
    


  


}

function draw(){
    background(ground2Img);
    Engine.update(engine);

    


    box1.display();
    box2.display();
    ball1.display();
    box3.display();
    box4.display();
    box5.display();
    ball1.display();
    boxes1.display();
    boxes2.display();
    boxes3.display();
    boxes4.display();
    circle1.display();
    circle2.display();
    circle3.display();
    square1.display();
    square2.display();
    square3.display();
    square4.display();
    square5.display();
  





    plane2.display();
    plane.display();
    hammer.display();



    
  
}