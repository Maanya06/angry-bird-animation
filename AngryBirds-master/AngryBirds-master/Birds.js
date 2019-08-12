class Birds extends BaseClass{
    constructor(x,y) {
        super(x,y,50,50);
        this.image = loadImage("sprite/bird.png");
        World.add(world,this.body);
}
    
    display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
} 
}       