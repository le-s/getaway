import Physics from "./physics";
import Sprite from "./sprite";

const roadImg = new Image();
roadImg.src = "./assets/images/road.png";

class Road {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(roadImg, 765, 303);
  }
}

export default Road;

