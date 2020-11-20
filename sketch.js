var moving,fixed;
var obj1,obj2,obj3;
function setup() {
  createCanvas(1200,800);
  
 fixed= createSprite(600, 400, 50, 80);
 moving= createSprite(400,200,80,30);
 fixed.shapeColor="red";
 moving.shapeColor="blue";
obj1=createSprite(100,100,50,50);
obj1.shapeColor="purple"
obj2=createSprite(200,100,50,50);
obj2.shapeColor="purple"
obj3=createSprite(300,100,50,50);
obj3.shapeColor="purple"


}

function draw() {
  background(255,255,255);
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  bounceOff(moving,obj2)
 if(isTouching(moving,obj1)){
  moving.shapeColor="green";
  obj1.shapeColor="pink";
 }
else{
  obj1.shapeColor="red";
  moving.shapeColor="blue";
}
  drawSprites();
}
 
