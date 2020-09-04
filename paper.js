class Paper
{
    constructor(x,y)
    {
        var options={
            isStatic:false,
            resttution:0.3,
            friction:0.5,
            density:1.5
        }
        this.body=Bodies.circle(x,y,20,options);
        this.r=20;
        
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        fill(255,0,255);
        ellipseMode(RADIUS);
        ellipse(0,0,20,20);
        pop();
    }

}