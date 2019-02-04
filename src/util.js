const Util = {
  collide(obj1, obj2) {
    if (
      obj1.physics.x < obj2.physics.x + obj2.sprite.width
      && obj1.physics.x + obj1.sprite.width-10 > obj2.physics.x
      && obj1.physics.y < obj2.physics.y + obj2.sprite.height-10
      && obj1.physics.y + obj1.sprite.height-30 > obj2.physics.y
    ) return true;

    return false;
  }
};

module.exports = Util;