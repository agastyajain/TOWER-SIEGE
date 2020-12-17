class Polygon{
    constructor(x,y,r){
       var options = {
           isStatic :  false,
           restitution :0.2,
           friction : 1,
           density : 3
       }
       this.body=Bodies.circle(x,y,r,options);
       World.add(world,this.body);
       this.r=r;
    }

    display(){
   push();
    stroke("red");
    strokeWeight(5);
    fill("orange");
    var pos = this.body.position;
    ellipse(pos.x,pos.y,this.r*2,this.r*2);
    pop();

    }
}