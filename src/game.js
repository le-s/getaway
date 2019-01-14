// import GameView from './game_view.js';
// import Car from './car.js';
// import { request } from 'http';
import Road from './road.js';
import Util from './util';
import Obstacle from './obstacle';

class Game {
  constructor(canvas, ctx, assets) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.assets = assets;
    this.gameOver = false;
  }

  static checkCollision(car, obstacle, array) {
    if (Util.collide(car, obstacle)) {
      car.hitObstacle();
      array.splice(array.indexOf(obstacle), 1);
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
      // console.log(sprite.height)
      // console.log(canvas.height)
      // console.log(asset.physics.y)
      
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
    const animate = () => {
      const assets = Object.values(this.assets);
      requestAnimationFrame(animate);
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < assets.length; i++) {
        if (assets[i] instanceof Array) {
          for (let j = 0; j < assets[i].length; j++) {
            this.drawAsset(assets[i][j]);
            Game.checkCollision(this.assets.car, assets[i][j], this.assets.rock);
          }
        } else {
          this.drawAsset(assets[i]);
        }
      }
      this.assets.road.addScore();
      document.getElementById("score").innerHTML = `Score: ${this.assets.road.score}`;
      document.getElementById("lives").innerHTML = `Lives: ${this.assets.car.life}`;
      this.end();
    }

    animate();
  }

  end() {
    if (this.assets.car.life === 0) {
      this.gameOver = true;
      this.assets.road.stop();
      this.assets.rock.forEach(el => {
        el.stop();
      })
      document.getElementById("slow").innerHTML = `Too Slow!`;
    }
  }

  start() {
    this.draw();
    this.assets.road.move();
    this.assets.rock.forEach(el => {
      el.move();
    })
  }
}

export default Game;