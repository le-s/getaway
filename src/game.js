import GameView from './game_view';

class Game {
  constructor(canvas) {
    this.bg = new GameView();
    this.drawBG = this.drawBG.bind(this);
    this.draw = this.draw.bind(this);
  }

  draw() {
    this.drawBG();
  }

  drawBG() {
    this.bg.draw();
  }

  play() {
    
  }
}

export default Game;