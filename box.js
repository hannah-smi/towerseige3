class Box {
  constructor(x,y,width,height) {
    var options = {
        restitution:0.2
    }
    this.visibility=225;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  score()
  {
    if(this.visibility<0 && this.visibility>-105)
    {
      score++;
    }
  }
  display(){
    console.log(this.body.speed);

    if(this.body.speed<3)
    {
      var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    
    rectMode(CENTER);
    fill("yellow");
    rect(0,0, this.width, this.height);
    pop();
    }
    else
    {
      World.remove(world,this.body);
      push();
      this.visibility=this.visibility-5;
      pop();
    }
  }
};