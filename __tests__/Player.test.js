const Potion = require("../lib/Potion");

jest.mock("../lib/Potion.js");

console.log(new Potion());
test("creates a player object", () => {
  const player = new Player("Dave");

  expect(player.name).toBe("Dave");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});
function Player(name = "") {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion("health"), new Potion()];
}

Player.prototype.getStats = function () {
  return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility,
  };
};

Player.prototype.getInventory = function () {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};
module.exports = Player;
test("gets player's stats as an object", () => {
  const player = new Player("Dave");

  expect(player.getStats()).toHaveProperty("potions");
  expect(player.getStats()).toHaveProperty("health");
  expect(player.getStats()).toHaveProperty("strength");
  expect(player.getStats()).toHaveProperty("agility");
});
test("gets inventory from player or returns false", () => {
  const player = new Player("Dave");

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});
// test("gets player's health value", () => {
//   const player = new Player("Dave");

//   expect(player.getHealth()).toEqual(
//     expect.stringContaining(player.health.toString())
//   );
// });
// test("checks if player is alive or not", () => {
//   const player = new Player("Dave");

//   expect(player.isAlive()).toBeTruthy();

//   player.health = 0;

//   expect(player.isAlive()).toBeFalsy();
// });
// test("subtracts from player's health", () => {
//   const player = new Player("Dave");
//   const oldHealth = player.health;

//   Player.prototype.reduceHealth = function (health) {
//     this.health -= health;

//     if (this.health < 0) {
//       this.health = 0;
//     }
//   };

test("adds a potion to the inventory", () => {
  const player = new Player("Dave");
  const oldCount = player.inventory.length;

  Player.prototype.addPotion = function (potion) {
    this.inventory.push(potion);
  };
});
