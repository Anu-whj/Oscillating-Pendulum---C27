const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground,connector

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  //creates the ground, holder, ball and the connector.
  ground = new Ground();
  holder = new Holder();
  ball = new Ball(220,200,40);
  connector = new Connector({x:200,y:100},ball.body);
}


function draw() {
  background(0); 
  Engine.update(engine);
  
  //displays the text. 
  text("Drag the pendulum to oscillate the pendulum.",90,20);
  text("Press Enter to stop the Pendulum from oscillating.",100,50);

  //displays the ground, holder, ball and the connector.
  ground.display();
  ball.display();
  holder.display();
  connector.display();
}

//oscillates the pendulum when the mouse is dragged.
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
  Matter.Body.setStatic(ball.body, false);
}  

//stops the pendulum from oscillating when the ENTER key is pressed.
function keyPressed(){
  if(keyCode === ENTER){
    Matter.Body.setStatic(ball.body, true);
  }
}





