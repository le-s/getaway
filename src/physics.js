class Physics {
  constructor(x, y, w = null, h = null) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.dLeft = 0;
    this.dRight = 0;
    this.dDown = 0;
    this.dUp = 0;
    this.dx = this.dx.bind(this);
    this.dy = this.dy.bind(this);
  }

  dx() {
    return - this.dLeft + this.dRight; 
  }

  dy() {
    return - this.dUp + this.dDown;
  }

  updatePosition() {
    this.x += this.dx();
    this.y += this.dy();
  }

  // updates car
  boundedUpdate() {
    const {dx, dy} = this;
    const bound = { top: 0, down: 550, left: 80, right: 350 };
    this.boundedMove({x: dx(), y: dy()}, bound);
  }

  // sets boundaries for car
  boundedMove(move, bound) {
    this.x += move.x;
    this.y += move.y;
    if (this.x < bound.left) {
      this.x = bound.left;
    }
    if (this.x > bound.right) {
      this.x = bound.right;
    }
    if (this.y < bound.top) {
      this.y = bound.top;
    }
    if (this.y > bound.down) {
      this.y = bound.down;
    }
  }
}

export default Physics;