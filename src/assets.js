import Car from './car';
import Road from './road';
import Physics from './physics';

// let car = new Car(new Physics(213, 500));
// let road = new Road(new Physics(0, -561));

const assets = () => ({
  road: new Road(new Physics(0, -561)),
  car: new Car(new Physics(213, 500))
});


export default assets;