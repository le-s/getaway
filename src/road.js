import Physics from "./physics";
import Sprite from "./sprite";

const roadImg = new Image();
roadImg.src = "./assets/images/road.png";

class Road {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(roadImg, 1262, 502);
    this.score = 0;
    this.gameOver = false;
    this.green = false;
  }

  move() {
    this.physics.dDown = 6;
  }

  addScore() {
    if (!this.gameOver) {
      this.score += 1;
    } else {
      this.score;
    }
  }

  makeGreen() {
    this.green = true;
    setTimeout(() => {
      this.makeGreenFalse() 
    }, 300);
  }

  makeGreenFalse() {
    this.green = false;
  }

  stop() {
    this.physics.dDown = 0;
    this.gameOver = true;
  }
}

export default Road;

