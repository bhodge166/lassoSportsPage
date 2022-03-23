const sequelize = require("../config/connection");
const seedPlayers = require("./playerData.js");
const seedStaff = require("./staffData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedPlayers();

  await seedStaff();

  process.exit(0);
};

seedDatabase();
