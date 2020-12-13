class Stone {
    constructor(x,y,radius){
    this.radius=radius;
    var option ={
    isStatic:false,  
    restitution:0.3,
    friction:10,
    density:1.2
    }
    this.body = Bodies.circle(x,y,19,option)
    this.image=loadImage("stone.png");
    World.add(world,this.body)
    } 
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    angleMode(RADIANS)
    imageMode(CENTER)
    image(this.image,0,0,50,50);
    pop();
    }
    }