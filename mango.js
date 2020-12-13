class Mango {
    constructor(x,y,radius){
    this.radius=radius;
    var option ={
    isStatic:true,  
    density:1.0,
    friction:1,
    }
    this.body = Bodies.circle(x,y,this.radius,option)
    this.image=loadImage("mango.png");
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
    image(this.image,0,0,90,90);
    pop();
    }
    }