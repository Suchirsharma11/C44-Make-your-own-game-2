class Treatment{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.image = loadImage("Image/Antidote.png");

        this.Status = "";
    }
    display(){
            imageMode(CENTER);
            image(this.image, this.x + 20, this.y - 30, 100, 100);
    }
    spawntreatment(){
        if(treatment.Status === "spawntreatment"){
            treatment.x = -Width/2.1 + Width/2;
            treatment.y = Height/2;

            treatment.Status = "spawnedtreatment"
        }
      }
}