import Car from './car';
import Road from './road'
import Physics from './physics';

const car = new Car(new Physics(300, 300));
const road = new Road(new Physics(200, 200));

const assets = [
  road,
  car
]

export default assets;