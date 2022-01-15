const Potion = require("../lib/Potion");
Player.prototype.getHealth = function () {
  return `${this.name}'s health is now ${this.health}!`;
};
Player.prototype.isAlive = function () {
  if (this.health === 0) {
    return false;
  }
  return true;
};
Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;
  
    return Math.floor(Math.random() * (max - min) + min);
  };