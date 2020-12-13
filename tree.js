class Tree {
    constructor(x,y,width,height){
    this.width = width;
    this.height = height;
    var option ={
    isStatic:true,
    scale:0.01
    }
    this.body = Bodies.rectangle(x,y,10,10,option)
    this.image=loadImage("tree.png")
    World.add(world,this.body)
    } 
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,10,0,this.height,this.width);
    pop();
    }
    }