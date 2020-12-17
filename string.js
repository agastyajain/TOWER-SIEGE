class String{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            stiffnes:1,
            length:100
        }
         this.string=Constraint.create(options);
         World.add(world,this.string);
        
    }

    fly() {
        this.string.bodyA= null;
    }

    display(){
        if(this.string.bodyA){
            push();
            strokeWeight(2);
            var pos1=this.string.bodyA.position;
            var pos2=this.string.pointB;
            line(pos1.x,pos1.y,pos2.x,pos2.y);
            pop();   
        }
     }

    
    

}