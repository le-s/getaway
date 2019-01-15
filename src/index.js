import Game from "./game.js";
import assets from './assets.js';
import setupControlListeners from './car_controls.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  document.getElementById("play-btn-text").innerHTML = "Push to start";
  canvas.height = 700;
  canvas.width = 500;
  let game; 
  
  document.getElementById("play-btn").addEventListener("click", () => {
    document.getElementById("splash").style.visibility = 'hidden';
    game = new Game(canvas, ctx, assets);
    setupControlListeners(game);
    game.start();
  })
});
