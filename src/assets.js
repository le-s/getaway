import Car from './car';
import Road from './road';
import Physics from './physics';

const car = new Car(new Physics(200, 550));
const road = new Road(new Physics(0, -561));

const assets = [
  road,
  car
]

export default assets;