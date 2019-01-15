// import GameView from './game_view.js';
// import Car from './car.js';
// import { request } from 'http';
import Road from './road.js';
import Life from './life.js';
import Util from './util';
import Obstacle from './obstacle';
import Physics from './physics';

class Game {
  constructor(canvas, ctx, assets) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.assets = assets;
    this.gameOver = false;
    this.rocks = [];
    this.life = [];
  }

  static checkCollision(car, object, array) {
    if (object instanceof Obstacle) {
      if (Util.collide(car, object)) {
        car.hitObstacle();
        array.splice(array.indexOf(object), 1);
      }
    }
    if (object instanceof Life) {
      if (Util.collide(car, object)) {
        car.getLife();
        if (!(array instanceof Array)){
          debugger
        }
        array.splice(array.indexOf(object), 1);
      }
    }
  }

  static checkCanvas(object, array) {
    if (object instanceof Life) {
      if (object.physics.y > canvas.height) {
        array.splice(array.indexOf(object), 1);
      }
    }
  }

  drawAsset(asset) {
    const { physics, sprite } = asset;

    if (asset instanceof Road && asset.physics.y >= 0) {
      if (sprite.height > canvas.height) {
        if (asset.physics.y > (canvas.height)) {
          asset.physics.y = canvas.height - sprite.height;
        }

        this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height, asset.physics.x, asset.physics.y - sprite.height + 1, sprite.width, sprite.height);
      }
    }

    if (asset instanceof Obstacle && asset.physics.y >= 0) { 
      if (asset.physics.y > canvas.height) {
        this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height, asset.physics.x, asset.physics.y - 900, sprite.width, sprite.height);
      }
    }

    this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height,
      physics.x, physics.y, sprite.width, sprite.height);

    if (this.assets.car.life != 0) {
      physics.updatePosition();
    }
  }

  draw() {
    if (!this.gameOver) {
      const animate = () => {
        const assets = Object.values(this.assets);
        requestAnimationFrame(animate);
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        for (let i = 0; i < assets.length; i++) {
          this.drawAsset(assets[i]);
        }
  
        this.rocks.forEach(el => {
          Game.checkCollision(this.assets.car, el, this.rocks);
          Game.checkCanvas(el, this.rocks);
        })
  
        this.life.forEach(el => {
          Game.checkCollision(this.assets.car, el, this.life);
        })
        
        this.life.forEach(el => {
          this.drawAsset(el);
          el.move();
        });     
  
        this.rocks.forEach(el => {
          this.drawAsset(el);
          el.move();
        })
  
        this.assets.road.addScore();
        document.getElementById("score").innerHTML = `Score: ${this.assets.road.score}`;
        document.getElementById("lives").innerHTML = `Lives: ${this.assets.car.life}`;
        this.end();

      }
  
      animate();
    }
  }

  end() {
    if (this.assets.car.life <= 0) {
      this.gameOver = true;
      this.assets.road.stop();
      document.getElementById("slow").innerHTML = `Too Slow!`;
    }
  }

  createRock() {
    // const rock = new Obstacle(new Physics(
    //   Math.floor(Math.random() * 310) + 80,
    //   -900));
    // this.rocks.push(rock);
    this.rocks.push(new Obstacle(new Physics(
      Math.floor(Math.random() * 310) + 80,
      -20)
    ));
  };

  createLife() {
    this.life.push(new Life(new Physics(
      Math.floor(Math.random() * 310) + 80,
      -20)
    ));
  };

  start() {
    setInterval(() => {
    if (!this.gameOver) {
        this.createRock();
      }
    }, 2000);
    setInterval(() => {
    if (!this.gameOver) {
        this.createLife();
      }
    }, 5000);
    this.draw();
    this.assets.road.move();
  }
}

export default Game;