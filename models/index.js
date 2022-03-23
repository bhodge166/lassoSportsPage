const User = require("./User");
const Roster = require("./Roster");
const Player = require("./Player");
const Staff = require("./Staff");

Roster.hasMany(Player, {
  foreignKey: "player_id",
});
Roster.hasMany(Staff, {
  foreignKey: "staff_id",
});
Staff.belongsTo(Roster, {
  foreignKey: "staff_id",
});
Player.belongsTo(Roster, {
  foreignKey: "player_id",
});

module.exports = { User, Roster, Player, Staff };
