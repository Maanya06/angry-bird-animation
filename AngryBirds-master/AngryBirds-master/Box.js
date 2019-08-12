class Box extends BaseClass{
    constructor(x,y) {
        super(x,y,50,50);
        this.image = loadImage("sprite/wood1.png");
        World.add(world,this.body);
}
    
    display(){
    
    super.display();
} 
} 