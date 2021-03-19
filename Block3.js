class Block3 {
    constructor(x, y, width, height, color) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color;
      World.add(world, this.body);
    }
    display(){
      push();
      fill(0, 228, 208);
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      rect( 0, 0, this.width, this.height);
      pop();
    }
  }