class Particle{
    cosntructor(x,y,radius){
        var options ={
            isStatic:true
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.color = color(random(0,255),random(0,255),random(0,255));

    this.radius = radius;
    World(world,this.body)
}
display([j]){
    var pos = this.body.position;
    push();
    ellipseMode(CENTER);
    fill(this.color)
    ellipse(pos.x,pos.y,this.radius,20)
}
}