class Ground{
     constructor (x,y,w,h){
         var options = {
             isStatic:true
         }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = 480;
        this.height = 20;
        World.add(world,this.body)
        

     }
     display(){
         var pos = this.body.position;
        
        
         push();
         rectMode(CENTER);
         fill('red')
         rect(pos.x,pos.y,480,20)
         pop();
         
     
    }
     display1(){
         var pos = this.body.position;
        
        push();
        rectMode(CENTER);
        fill('white')
        rect(pos.x,pos.y,480,20)
        pop();

     }
}
     