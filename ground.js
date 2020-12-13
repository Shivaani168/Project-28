class Ground {
    constructor(x,y,width,height){
    this.width = width;
    this.height = height;
    var option ={
    density:1,
    friction:10,
    isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,option)
    World.add(world,this.body)
    } 
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    angleMode(RADIANS)
    rectMode(CENTER)
    fill("brown")
    rect(0,0,this.width,this.height)
    pop();
    }
    }