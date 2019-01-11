import Physics from './physics';
import Sprite from './sprite';

const carImg = new Image();
carImg.src = './assets/images/car.png';

class Car {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(carImg, 100, 100);
  }
}

// class Car {
//   constructor(canvas) {
//     this.car = new Image();
//     this.height = canvas.height;
//     this.width = canvas.width;
//     this.car.src = './assets/images/car.png';
//   }

//   draw(ctx) {
//     console.log(this.car);
//     ctx.drawImage(
//       this.car, 0, 0, 100, 100, 
//       100, 100, 100, 100);
//   }
// }

export default Car;