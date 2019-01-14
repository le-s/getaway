import Game from "./game.js";
import assets from './assets.js';
import setupControlListeners from './car_controls.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  canvas.height = 700;
  canvas.width = 500;
  const game = new Game(canvas, ctx, assets);
  setupControlListeners(game);

  game.start();
});
