import Car from './car';
import Road from './road';
import Physics from './physics';
import Obstacle from './obstacle';

const car = new Car(new Physics(200, 550));
const road = new Road(new Physics(0, -561));
const rock = new Obstacle(new Physics(
  Math.floor(Math.random() * 310) + 80, 
  Math.floor(Math.random() * 910) - 560)
);

const assets = {
  road,
  rock,
  car,
}

export default assets;