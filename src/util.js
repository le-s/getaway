const Util = {
  collide(obj1, obj2) {
    if (
      obj1.physics.x < obj2.physics.x + obj2.sprite.width
      && obj1.physics.x + obj1.sprite.width > obj2.physics.x
      && obj1.physics.y < obj2.physics.y + obj2.sprite.height
      && obj1.physics.y + obj1.sprite.height > obj2.physics.y
    ) return true;

    return false;
  }
};

module.exports = Util;