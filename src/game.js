// import GameView from './game_view.js';
// import Car from './car.js';
// import { request } from 'http';
import Road from './road.js';

class Game {
  constructor(canvas, ctx, assets) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.assets = assets;
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

    this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height,
      physics.x, physics.y, sprite.width, sprite.height);
    physics.updatePosition();
  }

  draw() {
    const animate = () => {
      const assets = Object.values(this.assets);
      requestAnimationFrame(animate);
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < assets.length; i++) {
        this.drawAsset(assets[i]);
      }
    }

    animate();
  }
}

export default Game;