class Ground {
    constructor(){

    var options={
    isStatic:true,
    density:1,
    restitution:0.8,
    friction:1,
    }
   this.body=Bodies.rectangle(100,614,3000,20,options);  
   this.width=3000;   
   this.height=20;   
   World.add(world,this.body);
    } 

    display(){
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("white");
      stroke("black");
      strokeWeight(4);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }
}
