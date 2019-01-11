class GameView {
  constructor(canvas) {
    this.img = new Image();
    this.img2 = new Image();

    this.img.src = './assets/images/road.png';
    this.img2.src = './assets/images/road.png';


    this.imgPos = 0;
    this.img2Pos = -canvas.height;

    this.scale = 1.05;
    this.y = 0;
    this.dx = 0.75;
    this.imgW = canvas.width;
    this.imgH = canvas.height;
    this.x = 0;
    this.clearX;
    this.clearY;
    window.drawBG = this.draw.bind(this, canvas.getContext('2d'));
    // this.img.onload = function () {


    // }
    // this.draw = this.draw.bind(this)
  }

  draw(ctx) {

    ctx.drawImage(this.img, this.x, this.y, this.imgW, this.imgH);
    this.x += this.dx;
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, 100, 100)
  }
};

export default GameView;