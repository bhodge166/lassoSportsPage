const { Staff } = require("../models");

const staffData = [
  {
    first_name: "Rebecca",
    last_name: "Welton",
    nationality: "eng.png",
    occupation: "Owner, Chairman",
    former_clubs: "n/a",
    file_name: "rebecca_welton.png",
  },
  {
    first_name: "Ted",
    last_name: "Lasso",
    nationality: "us.png",
    occupation: "Head Coach",
    former_clubs: "Wichita State Shockers (NCAA Division I-AA)",
    file_name: "ted_lasso.png",
  },
  {
    first_name: "Coach",
    last_name: "Beard",
    nationality: "us.png",
    occupation: "Assistant Coach",
    former_clubs: "Wichita State Shockers (NCAA Division I-AA)",
    file_name: "coach_beard.png",
  },
  {
    first_name: "Nathan",
    last_name: "Shelly",
    nationality: "eng.png",
    occupation: "Assistant Coach",
    former_clubs: "n/a",
    file_name: "nathan_shelly.png",
  },

];

const seedStaff = () => Staff.bulkCreate(staffData);

module.exports = seedStaff;
