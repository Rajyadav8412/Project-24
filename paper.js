class paper{
    constructor(x,y,radius){

        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density':1.2
        }

        this.body =  Matter.Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var rad = this.body.radius;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        
        fill("blue");
        ellipse(0,0,this.radius);
        pop();
        
    }
}