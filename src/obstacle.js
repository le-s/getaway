import Physics from "./physics";
import Sprite from "./sprite";

const rockImg = new Image();
rockImg.src = "./assets/images/rock.png";

class Obstacle {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(rockImg, 30, 35);
  }

  move() {
    this.physics.dDown = 6;
  }

  stop() {
    this.physics.dDown = 0;
  }
}

export default Obstacle;