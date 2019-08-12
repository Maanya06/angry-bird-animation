class BaseClass{
    constructor(x,y,width,height,angle) {
var options = {
    restitution: 0.3,
    friction: 1.8,
    density:1.5
    
};
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprite/base.png");
    World.add(world, this.body);
};
display(){
var angle = this.body.angle;
push();
translate(this.body.position.x,this.body.position.y);
rotate(angle);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();
};
};