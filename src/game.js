// import GameView from './game_view.js';
// import Car from './car.js';
// import { request } from 'http';

class Game {
  constructor(canvas, ctx, assets) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.assets = assets;
    // this.bg = new GameView(canvas);
    // this.car = new Car(canvas);
  }

  drawAsset(asset) {
    const { physics, sprite } = asset;

    this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height,
      physics.x, physics.y, sprite.width, sprite.height);
    
    // if (sprite.height === 0) {
    //   this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height,
    //     physics.x, physics.y, sprite.width, sprite.height);
    // }

    physics.updatePosition();
  }

  draw() {
    const animate = () => {
      requestAnimationFrame(animate);
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < this.assets.length; i++) {
        this.drawAsset(this.assets[i]);
      }
    }

    animate();
  }
  // draw() {
  //   this.drawBG();
  // }

  // start() {
  //   const ctx = this.canvasEl.getContext("2d");
  //   const animateCallback = () => {
  //     this.frame = requestAnimationFrame(animateCallback);
  //     this.renderBackground(ctx);
  //   };
  //   animateCallback();
  // }

  // drawBG() {
  //   this.bg.draw(this.ctx);
  // }

  // play() {
  //   this.draw();
  //   // this.car.draw(this.ctx);
  // }
}

export default Game;