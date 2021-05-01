var Width = innerWidth;
var Height = innerHeight;

var Grass;


var buttons;
var enemy1PowerBar, enemy2PowerBar, enemy3PowerBar, enemy4PowerBar, soilderPowerBar;

var bullet;
var enemy1, enemy2, enemy3, enemy4;

function preload(){
  Grass = loadImage("Image/Grass.jpg");
}

function setup() {
  createCanvas(Width, Height);

    buttons = new SpawnButton();

    enemy1PowerBar = new EnemyPower(Width - 110, 20, 100, 25, 100, 1);
    enemy2PowerBar = new EnemyPower(Width - 110, 20 + 25 + 25/2, 100, 25, 100, 1);
    enemy3PowerBar = new EnemyPower(Width - 110, 20 + 25 + 25 + 25/2 + 25/2, 100, 25, 100, 1);
    enemy4PowerBar = new EnemyPower(Width - 110 - 25 - 25/2, 20, 25, 100, 100, 0);

    soilderPowerBar = new SoilderPower(100, Height - 20 - 25, 200, 25, 200, 1);

    soilder = new Soilder(100, -100);
    treatment = new Treatment(0, -100);

    bullet = new Bullet(soilder.x, soilder.y);

    enemy1 = new Enemy(75, 100);
    enemy2 = new Enemy(75, 100);
    enemy3 = new Enemy(75, 100);
    enemy4 = new Enemy(150, 200);
}

function draw() {
  background(Grass);
  
  for(var a = 0; a <= Height; a = a + 30){ 
    line(-200 + Width/2, a, -200 + Width/2, a + 10);
  }

  enemy1.displayAndMove(500, 500, 200);
  enemy2.displayAndMove(1000, 800, 200);
  enemy2.displayAndMove(1500, 800, 200);
  enemy4.displayAndMove(2000, 800, 200);

  enemy1PowerBar.update();
  enemy2PowerBar.update();
  enemy3PowerBar.update();
  enemy4PowerBar.update();

  soilderPowerBar.update();

  buttons.display();

  enemy1PowerBar.display(enemy1);
  enemy2PowerBar.display(enemy2);
  enemy3PowerBar.display(enemy3);
  enemy4PowerBar.display(enemy4);

  soilderPowerBar.display(soilder);

  soilder.display();
  treatment.display();
  bullet.display();

  soilder.spawnSoilder();  
  treatment.spawntreatment();

  if(bullet.Status === "shootSetup" && bullet.speed === 0){
    bullet.shootSetup();
  }
  else{
    bullet.Status = "shoot";
  }

  if(bullet.Status === "shoot"){
    bullet.shoot();
  }

  if(bullet.speed === 0){
    soilder.dierection = soilder.tDierection;
  }

  enemy1.attack(30, 1000);
  enemy2.attack(50, 1500);
  enemy3.attack(100, 4000);
  enemy4.attack(150, 5000);

  bullet.damage();

  soilder.death();

  enemy1.rebirthDeath(enemy1PowerBar); 
  enemy2.rebirthDeath(enemy1PowerBar); 
  enemy3.rebirthDeath(enemy3PowerBar); 
  enemy4.rebirthDeath(enemy4PowerBar); 

}

function Move(Obj, xs, ys){
  var x = Obj.x;
  x = x + xs;
  Obj.x = x;
  var y = Obj.y;
  y = y + ys;
  Obj.y = y;
}
function keyPressed(){
  if(soilder.x > 0 && soilder.x < Width && soilder.y > 0 && soilder.y < Height){
    if(keyCode ===  37){
      soilder.MoveSoilderLeft();
      soilder.tDierection = "left";
    }
    if(keyCode ===  38){
      soilder.MoveSoilderUp();
      soilder.tDierection = "up";
    }
    if(keyCode ===  39){
      soilder.MoveSoilderRight();
      soilder.tDierection = "right";
    }
    if(keyCode ===  40){
      soilder.MoveSoilderDown();
      soilder.tDierection = "down";
    }
    if(keyCode ===  32){
      bullet.Status = "shootSetup";
    }
  }
}

function findC(obj1, obj2){
  if(obj1.x > obj2.x && obj1.y > obj2.y){
    var Xdifferance = obj1.x - obj2.x;
    var Ydifferance = obj1.y - obj2.y;
    var XYdifferance = (Xdifferance * Xdifferance) + (Ydifferance * Ydifferance);
    var c = Math.sqrt(XYdifferance);
    return c;
  }
  if(obj1.x < obj2.x && obj1.y > obj2.y){
    var Xdifferance = obj2.x - obj1.x;
    var Ydifferance = obj1.y - obj2.y;
    var XYdifferance = (Xdifferance * Xdifferance) + (Ydifferance * Ydifferance);
    var c = Math.sqrt(XYdifferance);
    return c;
  }
  if(obj1.x < obj2.x && obj1.y < obj2.y){
    var Xdifferance = obj2.x - obj1.x;
    var Ydifferance = obj2.y - obj1.y;
    var XYdifferance = (Xdifferance * Xdifferance) + (Ydifferance * Ydifferance);
    var c = Math.sqrt(XYdifferance);
    return c;
  }
  if(obj1.x > obj2.x && obj1.y < obj2.y){
    var Xdifferance = obj1.x - obj2.x;
    var Ydifferance = obj2.y - obj1.y;
    var XYdifferance = (Xdifferance * Xdifferance) + (Ydifferance * Ydifferance);
    var c = Math.sqrt(XYdifferance);
    return c;
  }
}

  function isTouching(obj1, obj2){
  if(obj1.x - obj2.x < obj2.width/2 + obj1.width/2 &&
    obj2.x - obj1.x < obj2.width/2 + obj1.width/2 &&
    obj2.y - obj1.y < obj1.height/2 + obj2.height/2 &&
    obj1.y - obj2.y < obj1.height/2 + obj2.height/2){
    return true;
  }
  else{
    return false;
  }
}