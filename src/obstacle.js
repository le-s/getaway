import Physics from "./physics";
import Sprite from "./sprite";

const rockImg = new Image();
rockImg.src = "./assets/images/rock.png";

class Obstacle {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(rockImg, 100, 100);
    // this.physics.dDown = 2;
  }
}

export default Obstacle;