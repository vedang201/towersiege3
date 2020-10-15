class Box {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.6,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility = 225;
      World.add(world, this.body);
    }
    display(){
      
      //console.log(this.body.speed);

      
        var pos =this.body.position;
      push();
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
      
      //if(this.body.speed>3){

       //World.remove(world,this.body);
       push();
       this.visibility -= 5;
       pop();

      //}

     
    }
  }
