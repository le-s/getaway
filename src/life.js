import Sprite from './sprite';

const lifeImg = new Image();
lifeImg.src = "./assets/images/turbo.png";

class Life {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(lifeImg, 30, 31);
  }

  move() {
    this.physics.dDown = 6;
  }

  stop() {
    this.physics.dDown = 0;
  }
}

export default Life;