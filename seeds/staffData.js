const { Staff } = require("../models");

const staffData = [
  {
    first_name: "Rebecca",
    last_name: "Welton",
    nationality: "eng.png",
    occupation: "Owner, Chairman",
    former_clubs: "n/a",
  },
  {
    first_name: "Tedd",
    last_name: "Lasso",
    nationality: "us.png",
    occupation: "Head Coach",
    former_clubs: "Wichita State Shockers (NCAA Division I-AA)",
  },
  {
    first_name: "Coach",
    last_name: "Beard",
    nationality: "us.png",
    occupation: "Assistant Coach",
    former_clubs: "Wichita State Shockers (NCAA Division I-AA)",
  },
  {
    first_name: "Nathan",
    last_name: "Shelly",
    nationality: "eng.png",
    occupation: "Assistant Coach",
    former_clubs: "n/a",
  },
];

const seedStaff = () => Staff.bulkCreate(staffData);

module.exports = seedStaff;
