class Bullet{
    constructor(x, y){
        this.x = x;
        this.y = y;

        this.image = loadImage("Image/Bullet.png");
        this.Status = "";

        this.speed = 0;
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, 100, 40);
    }
    shootSetup(){
        this.speed = Math.round(random(100, 150));
        bullet.x = soilder.x;
        bullet.y = soilder.y;

        bullet.Status = "shoot";
    }
    shoot(){    
      if(soilder.dierection === "left"){
        Move(bullet, -this.speed, 0);
      }
  
      else if(soilder.dierection === "right" || soilder.dierection === "" || soilder.dierection === undefined){
        Move(bullet, this.speed, 0);
      }
  
      else if(soilder.dierection === "up"){
        Move(bullet, 0, -this.speed);
      }
  
      else if(soilder.dierection === "down"){
        Move(bullet, 0, this.speed);
      }
  
      if(bullet.x > Width || bullet.y > Height || bullet.x < 0 || bullet.y < 0){
        bullet.speed = 0;
      }
    }
    /* damage(){
      if(bullet.isTouching(enemy1)){
        enemy1PowerBar.power = enemy1PowerBar.power - this.speed/4

        console.log("Touch");
      }
      if(bullet.isTouching(enemy2)){
        enemy2PowerBar.power = enemy2PowerBar.power - this.speed/4
        
        console.log("Touch");
      }
      if(bullet.isTouching(enemy3)){
        enemy3PowerBar.power = enemy3PowerBar.power - this.speed/4
        
        console.log("Touch");
      }
      if(bullet.isTouching(enemy4)){
        enemy14PowerBar.power = enemy4PowerBar.power - this.speed/4
        
        console.log("Touch");
      }
    } */
}