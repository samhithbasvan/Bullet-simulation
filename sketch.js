//variables
let bullet;
let wall;
let speed;
let thickness;
let weight;


function setup() 
{
  //designing the canvas 
  createCanvas(1200,400);

  //creating the sprites 
  bullet = createSprite(200, 200, 50, 5);
  wall = createSprite(1000,200, thickness ,height/2);

  //adding the shape colors 
  bullet.shapeColor = "black";
  wall.shapeColor =  "sea blue";

  //thickness
  thickess = random(22,80);
  wall.width = thickness;

  //weight
  weight=random(30,52);
  
  //speeeeeeeeeeed
  speed = random(223,321);
  bullet.velocityX = speed;

}

function draw() {
  //rgb for the background
  background(25,05,100);
  if (hasCollided(bullet,wall) || (wall.x - bullet.x < (bullet.width + wall.width)/2))
  {
      bullet.velocityX = 0;

      //variable for Damage 
      var damage = 0.5 * weight * speed * speed / (thickness*thickness*thickness);

      //damage for above average
      if (damage > 10 )
      {
          wall.shapeColor = "red";//color(255,0,0);

      }

      //damage for good, no-harming wall
      else if(damage <= 10 )//|| bullet.x >= wall.width)
      {

        wall.shapeColor = "green";//color(0,255,0);
      
      }
  }
  
  if (mousePressedOver(bullet))
  {
      bullet.x = 200;
      bullet.y = 200;
      wall.shapeColor =  "sea blue";

  }

  //restarting the simulation
  if (keyWentDown("space"))
  {
    bullet.x = 200;
    bullet.y = 200;
    
    //randomising velocities
   speed=random(55,90);
   bullet.velocityX = random(223,321);

   //randomising the width of the wall  
   wall.width = thickness = random(22,80);
  
  }
  //drawing the sprites 
  drawSprites();
  
}

//global variable
function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge.x >=wallLeftEdge) 
  {

    return true;

  }
else 
  {

  return false;

  }
}