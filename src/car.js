import Physics from './physics';
import Sprite from './sprite';

const carImg = new Image();
carImg.src = './assets/images/car.png';

class Car {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(carImg, 150, 74);
    this.life = 3;
  }

  hitObstacle() {
    this.life -= 1;
  }

  getLife() {
    this.life += 1;
  }

  resetLife() {
    this.life = 3;
  }
}

export default Car;