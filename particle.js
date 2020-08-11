class Particle {

    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.4,
            friction : 0,
            density : 0.6
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
                       
    }
    display(){
         
         this.color = color(random(0,255));   
         push(); 
        translate (this.body.position.x,this.body.position.y);

        
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}
