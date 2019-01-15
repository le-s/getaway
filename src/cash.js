import Sprite from "./sprite";

const cashImg = new Image();
cashImg.src = "./assets/images/money.png";

class Cash {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(cashImg, 40, 40);
  }

  move() {
    this.physics.dDown = 4;
  }

  stop() {
    this.physics.dDown = 0;
  }
}

export default Cash;
