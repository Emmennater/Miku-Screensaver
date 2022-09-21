function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);

  speed = 4;

  box1 = new Box();
  box2 = new Box();
}

function run() {
  box1.run();
  box2.run();
}

function draw() {
  background(0, 30);
  run();
  box1.draw();
  box2.draw();
}

class Box {
  constructor() {
    this.box = {
      p1: new PhysicPoint(),
      p2: new PhysicPoint(),
      p3: new PhysicPoint(),
      p4: new PhysicPoint(),
      c1: new ColorChanger(),
      // c2: new ColorChanger(),
      // c3: new ColorChanger(),
      // c4: new ColorChanger()
    };
  }

  run() {
    this.box.p1.move();
    this.box.p2.move();
    this.box.p3.move();
    this.box.p4.move();
    this.box.c1.change();
    // this.box.c2.change();
    // this.box.c3.change();
    // this.box.c4.change();
  }

  draw() {
    let Box = this.box;
    strokeWeight(6);
    stroke(Box.c1.color);
    line(Box.p1.pos.x, Box.p1.pos.y, Box.p2.pos.x, Box.p2.pos.y);
    // stroke(Box.c2.color);
    line(Box.p2.pos.x, Box.p2.pos.y, Box.p3.pos.x, Box.p3.pos.y);
    // stroke(Box.c3.color);
    line(Box.p3.pos.x, Box.p3.pos.y, Box.p4.pos.x, Box.p4.pos.y);
    // stroke(Box.c4.color);
    line(Box.p4.pos.x, Box.p4.pos.y, Box.p1.pos.x, Box.p1.pos.y);
  }
}

class PhysicPoint {
  constructor(x, y, vx, vy) {
    x = x || random(width);
    y = y || random(height);
    vx = vx || (Math.random() > 0.5 ? 1 : -1);
    vy = vy || (Math.random() > 0.5 ? 1 : -1);

    this.pos = { x: x, y: y };
    this.vel = { x: vx, y: vy };
    this.speed = speed;
    this.offset = random(100);
  }

  move() {
    let newSpeed = this.speed + noise(deltaTime / 100 + this.offset) - 0.5;

    this.pos.x += this.vel.x * newSpeed;
    this.pos.y += this.vel.y * newSpeed;

    if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.x *= -1;
    }

    if (this.pos.x < 0) {
      this.pos.x = 0;
      this.vel.x *= -1;
    }

    if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.y *= -1;
    }

    if (this.pos.y < 0) {
      this.pos.y = 0;
      this.vel.y *= -1;
    }
  }
}

class ColorChanger {
  constructor() {
    this.offset = random(100);
    this.inc = 0;

    // this.color = color(
    //   random(50, 255),
    //   random(50, 255),
    //   random(50, 255)
    // );
  }

  change() {
    this.inc += 0.0025;
    let offset = this.offset + this.inc;
    let low = 20;
    let high = 255;
    this.color = color(
      noise(offset + 50) * (high-low) + low,
      noise(offset + 100) * (high-low) + low,
      noise(offset + 150) * (high-low) + low
    );
  }
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

/*



























*/
