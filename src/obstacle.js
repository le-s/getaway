import Physics from "./physics";
import Sprite from "./sprite";
import Car from './car'

const rockImg = new Image();
rockImg.src = "./assets/images/rock.png";

class Obstacle {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(rockImg, 30, 35);
    this.physics.dDown = 2;
  }

  remove() {
    this.clear();
  }
}

export default Obstacle;