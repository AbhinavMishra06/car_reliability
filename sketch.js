var car, wall;
var speed, weight;
var Ground;



function setup() {

  createCanvas(windowWidth, windowHeight);

  
  ground = createSprite(width/2, height/2, windowWidth - 100,height/2 +50  )
  car = createSprite(50, height/2, 70, 70);
  wall = createSprite(1200, height/2, 60, height/2);

  ground.shapeColor =rgb(10, 150, 201)
  car.shapeColor = "white";
  wall.shapeColor = "cyan";

  speed = random(55, 90);
  weight = random(400, 1500);
  
  car.velocityX=speed;

}



function draw() {

  background(255, 290, 150);

  fill(255, 0, 0);
  textSize(50);
  textFont("Kristen ITC");
  text("car reliability test", windowWidth/2 - 200, 100);
  
   if(wall.x - car.x<(car.width + wall.width)/2){
    car.velocityX=0;

    var deformation = 0.5 * weight * speed * speed / 22509;
    
    if(deformation>180){
      car.shapeColor = color(255, 0, 0)
      fill(192, 0, 250);
      textSize(40);
      textFont("Kristen ITC");
      text("This car is not Safe", windowWidth/2 - 125, windowHeight - 50);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor = color("orange");
      fill(192, 0, 250);
      textSize(40);
      textFont("Kristen ITC");
      text("This car is average", windowWidth/2 - 125, windowHeight - 50);
    }

    if(deformation<100){
      car.shapeColor = color(0, 255, 0);
      fill(192, 0, 250);
      textSize(40);
      textFont("Kristen ITC");
      text("This car Safe", windowWidth/2 - 125, windowHeight - 50);
    }
    
  }

  drawSprites();
}