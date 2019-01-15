import Car from './car';
import Road from './road';
import Physics from './physics';
import Obstacle from './obstacle';
import Life from './life';

const car = new Car(new Physics(213, 500));
const road = new Road(new Physics(0, -561));
let life = []
life.push(new Life(new Physics(Math.floor(Math.random() * 310) + 80,
  Math.floor(Math.random() * 910) - 560)));
// const rock = new Obstacle(new Physics(
//   Math.floor(Math.random() * 310) + 80, 
//   Math.floor(Math.random() * 910) - 560)
// );

let rock = [];
for (let i = 0; i < 10; i++) {
  rock.push(new Obstacle(new Physics(
    Math.floor(Math.random() * 310) + 80,
    Math.floor(Math.random() * 910) - 560)
  ));
}

const assets = {
  road,
  // rock,
  // life,
  car,
}

export default assets;