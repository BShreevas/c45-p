 const Engine = Matter.Engine
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 
 var gameState=0;
 var engine, world;
 var car,car1,car2,car3, car4, car5 , ground1,ground2;
 var zombie1, zombie2, zombie3, zombie4, zombie5, zombie6, zombie7, zombie8, zombie9, zombie10, zombie11, zombie12, zombie13, zombie14, zombie15;

 function setup(){
    createCanvas(2000, 800);
    engine = Engine.create();
    world = engine.world;

    car= new Car(75,564,200,40);
    car1= new Car(75,564,200,40);
    car2= new Car(375,556,200,40);
    car3= new Car(675,556,200,40);
    car4= new Car(976,556,200,40);
    car5= new Car(1276,556,200,40);

    ground1=new Ground();
    ground2=new Ground();
    zombie1= new Zombie(700,526);
    zombie2= new Zombie(750,526);
    zombie3= new Zombie(800,526);

    button= createButton("Start");
    button.position(1325,57);
    
    button.mousePressed(function(){
      button.hide();
      gameState=1;
      console.log("Start the game");
      console.log(gameState);
    });
 }

function draw (){
  background("brown");
  Engine.update(engine);

 
if (gameState===0){
  ground1.display();
  car1.display();
  car2.display();
  car3.display();
  car4.display();
  car5.display();
}
if (gameState===1){
  ground2.display();
  car.display();
  zombie1.display();
  zombie2.display();
  zombie3.display();
}
  textSize(20);
  text(mouseX+","+mouseY,mouseX,mouseY);
}

function keyPressed(){
if(keyCode===RIGHT_ARROW){
car.body.position.x=car.body.position.x+2;
}
}
 



 
 