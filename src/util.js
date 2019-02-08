const Util = {
  collide(obj1, obj2) {
    const width1 = obj1.physics.width ? obj1.physics.width : obj1.sprite.width;
    const width2 = obj2.physics.width ? obj2.physics.width : obj2.sprite.width;
    const height1 = obj1.physics.height ? obj1.physics.height : obj1.sprite.height;
    const height2 = obj2.physics.height ? obj2.physics.height : obj2.sprite.height;
    if (
      obj1.physics.x < obj2.physics.x + width2
      && obj1.physics.x + width1 > obj2.physics.x
      && obj1.physics.y < obj2.physics.y + height2
      && obj1.physics.y + height1 > obj2.physics.y
    ) return true;

    return false;
  }
};

module.exports = Util;