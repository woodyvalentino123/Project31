class Particle{
    cosntructor(x,y,radius){
        var options ={
           restitution:0.01

    }
    this.body = Bodies.circle(x,y,radius,options);
    this.color = color(random(0,255),random(0,255),random(0,255));

    this.radius = radius;
    World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    fill(this.color)
    ellipse(pos.x,pos.y,this.radius,20)
}
}