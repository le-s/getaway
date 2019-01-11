class Physics {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dLeft = 0;
    this.dRight = 0;
    this.dDown = 0;
    this.dUp = 0;
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
}

export default Physics;