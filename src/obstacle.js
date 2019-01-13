import Physics from "./physics";
import Sprite from "./sprite";
import Car from './car'

const rockImg = new Image();
rockImg.src = "./assets/images/rock.png";

class Obstacle {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(rockImg, 100, 100);
    this.physics.dDown = 2;
  }

  collideWith(object) {
    if (object instanceof Car) {
      object.hitObstacle();
      this.remove();
      return true;
    }

    return false;
  }
}

export default Obstacle;