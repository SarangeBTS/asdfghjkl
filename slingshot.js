class SLINGSHOT{
    constructor(bodyA,bodyB){

        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffnesss:0.04,
            length:10
        }
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }

    show(){
        var posA = this.body.bodyA.position;

        line(posA.x,posA.y,this.body.bodyB.position.x,this.body.bodyB.position.y);
    }
}