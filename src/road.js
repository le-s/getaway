import Physics from "./physics";
import Sprite from "./sprite";

const roadImg = new Image();
roadImg.src = "./assets/images/road.png";

class Road {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(roadImg, 1262, 502);
    // this.physics.dDown = 2;
  }

  move() {
    this.physics.dDown = 2;
  }
}

export default Road;

