import Car from './car';
import Road from './road';
import Physics from './physics';

const assets = () => ({
  road: new Road(new Physics(0, -561)),
  car: new Car(new Physics(214, 500, 70, 100))
});


export default assets;