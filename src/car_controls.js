const setupControlListeners = (game) => {
  window.addEventListener('keydown', e => {
    const car = game.assets[1]
    
    if (e.key === "a" || e.key === "ArrowLeft") {
      car.physics.dLeft = 5;
    }
    if (e.key === "d" || e.key === "ArrowRight") {
      car.physics.dRight = 5;
    }
    if (e.key === "w" || e.key === "ArrowUp") {
      car.physics.dUp = 5;
    }
    if (e.key === "s" || e.key === "ArrowDown") {
      car.physics.dDown = 5;
    }
  })
  window.addEventListener('keyup', e => {
    const car = game.assets[1]
    
    if (e.key === "a" || e.key === "ArrowLeft") {
      car.physics.dLeft = 0;
    }
    if (e.key === "d" || e.key === "ArrowRight") {
      car.physics.dRight = 0;
    }
    if (e.key === "w" || e.key === "ArrowUp") {
      car.physics.dUp = 0;
    }
    if (e.key === "s" || e.key === "ArrowDown") {
      car.physics.dDown = 0;
    }
  })
}

export default setupControlListeners;