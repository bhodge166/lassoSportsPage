const { Staff } = require("../models");

const staffData = [
  {
    nationality: "England",
    occupation: "Owner, Chairman",
    former_clubs: "n/a",
    staff_id: 10,
  },
  {
    nationality: "United States of America",
    occupation: "Head Coach",
    former_clubs: "Wichita State Shockers (NCAA Division I-AA)",
    staff_id: 11,
  },
  {
    nationality: "United States of America",
    occupation: "Assistant Coach",
    former_clubs: "Wichita State Shockers (NCAA Division I-AA)",
    staff_id: 12,
  },
  {
    nationality: "England",
    occupation: "Assistant Coach",
    former_clubs: "n/a",
    staff_id: 13,
  },
];

const seedStaff = () => Staff.bulkCreate(staffData);

module.exports = seedStaff;
