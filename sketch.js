var border1, border2, border3;
var wall1, wall2, wall3, wall4;
var car1, car2, car3, car4;
var speed1, weight1;
var speed2, weight2;
var speed3, weight3;
var speed4, weight4;

function setup() {
  createCanvas(1600,400);
  speed1 = random(55, 90);
  weight1 = random(400, 1500);

  speed2 = random(55, 90);
  weight2 = random(400, 1500);

  speed3 = random(55, 90);
  weight3 = random(400, 1500);

  speed4 = random(55, 90);
  weight4 = random(400, 1500);

  car1 = createSprite(50, 50, 30, 50);
  car2 = createSprite(50, 150, 30, 50);
  car3 = createSprite(50, 250, 30, 50);
  car4 = createSprite(50, 350, 30, 50);

  border1 = createSprite(800, 100, 1600, 20);
  border2 = createSprite(800, 200, 1600, 20);
  border3 = createSprite(800, 300, 1600, 20);

  wall1 = createSprite(1500, 50, 50, 50);
  wall2 = createSprite(1500, 150, 50, 50);
  wall3 = createSprite(1500, 250, 50, 50);
  wall4 = createSprite(1500, 350, 50, 50);

  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;

  


}

function draw() {
  background(0, 0, 0);  
  drawSprites();
}