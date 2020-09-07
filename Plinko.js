class Plinko{
    constructor (x,y,radius){
        var options = {
            isStatic:true
        }
        
       this.body = Bodies.circle(x,y,radius,options);
       
       this.radius = radius;
       World.add(world,this.body)

    }
    display([p]){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
       
        ellipse(pos.x,pos.y,this.radius,20)
    }
}