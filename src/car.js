import Physics from './physics';
import Sprite from './sprite';

const carImg = new Image();
carImg.src = './assets/images/car.png';

class Car {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(carImg, 100, 100);
    this.life = 1;
  }

  hitObstacle() {
    this.life -= 1;

    if (this.life === 0) {
      console.log("Game over");
      this.remove();
    }
  }

}

export default Car;