const sequelize = require("../config/connection");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const rosterData = await rosterData.bulkCreate(rosterData);

  // TODO: SEED DATA WHEN NPM RUN SEED IS CALLED IN TERMINAL
  test
  process.exit(0);
};

seedDatabase();
