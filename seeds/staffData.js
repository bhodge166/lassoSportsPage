const { Staff } = require("../models");

const staffData = [
  {
    nationality: 'eng.png',
    occupation: "Owner, Chairman",
    former_clubs: "n/a",
    staff_id: 10,
  },
  {
    nationality: 'us.png',
    occupation: "Head Coach",
    former_clubs: "Wichita State Shockers (NCAA Division I-AA)",
    staff_id: 11,
  },
  {
    nationality: 'us.png',
    occupation: "Assistant Coach",
    former_clubs: "Wichita State Shockers (NCAA Division I-AA)",
    staff_id: 12,
  },
  {
    nationality: 'eng.png',
    occupation: "Assistant Coach",
    former_clubs: "n/a",
    staff_id: 13,
  },
];

const seedStaff = () => Staff.bulkCreate(staffData);

module.exports = seedStaff;
