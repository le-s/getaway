// import GameView from './game_view.js';
// import Car from './car.js';
// import { request } from 'http';
import Road from './road.js'
import Physics from './physics.js'

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

    if (asset instanceof Road && asset.physics.y >= 0) {
      // console.log(asset.physics.y);
      // const newRoad = new Road(new Physics(0, 500));
      // asset = newRoad;
      // this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height,
      //   physics.x, physics.y, sprite.width, sprite.height);

      // if (sprite.height <= canvas.height) {
      //   // reset, start from beginning
      //   console.log('if')
      //   if (asset.physics.y > canvas.height) {
      //     asset.physics.y = -sprite.height + asset.physics.y;
      //   }
      //   // draw additional image1
      //   if (asset.physics.y > 0) {
      //     this.ctx.drawImage(sprite, x, -sprite.height + asset.physics.y, sprite.width, sprite.height);
      //   }
      //   // draw additional image2
      //   if (asset.physics.y - sprite.height > 0) {
      //     this.ctx.drawImage(sprite, x, -sprite.height * 2 + asset.physics.y, sprite.width, sprite.height);
      //   }
      // }

      // image is > Canvas Size
      if (sprite.height > canvas.height) {
        console.log(asset.physics.y)
        console.log(sprite.height)
        console.log(canvas.height)
        console.log("else")
        // reset, start from beginning
        if (asset.physics.y > (canvas.height)) {
          asset.physics.y = canvas.height - sprite.height;
        }
        // draw aditional image
        // if (asset.physics.y > (canvas.height - sprite.height)) {
          this.ctx.drawImage(sprite.img, asset.physics.x, asset.physics.y - sprite.height + 1, sprite.width, sprite.height);
        // }
      }
      // draw image
      this.ctx.drawImage(sprite.img, asset.physics.x, asset.physics.y, sprite.width, sprite.height);
      // amount to move
      asset.physics.y += asset.physics.dy;
      physics.updatePosition();
    }

    this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height,
      physics.x, physics.y, sprite.width, sprite.height);
    physics.updatePosition();
  }

  draw() {
    const animate = () => {
      const assets = Object.values(this.assets)
      requestAnimationFrame(animate);
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < assets.length; i++) {
        this.drawAsset(assets[i]);
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