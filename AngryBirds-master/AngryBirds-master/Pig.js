class Pig extends BaseClass{
    constructor(x,y) {
        super(x,y,50,50);
        this.image = loadImage("sprite/enemy.png");
        World.add(world,this.body);
}
    
    display(){
    super.display();
} 
} 