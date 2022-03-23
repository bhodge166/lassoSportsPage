const { Roster } = require("../models");

const rosterData = [
  {
    first_name: "Roy",
    last_name: "Kent",
  },

  {
    first_name: "Dani",
    last_name: "Rojas",
  },
  {
    first_name: "Jamie",
    last_name: "Tartt",
  },
  {
    first_name: "Isaac",
    last_name: "McAdoo",
  },
  {
    first_name: "Sam",
    last_name: "Obisanya",
  },
  {
    first_name: "Colin",
    last_name: "Hughes",
  },
  {
    first_name: "Jan",
    last_name: "Maas",
  },
  {
    first_name: "Richard",
    last_name: "Montlaur",
  },
  {
    first_name: "Thierry",
    last_name: "Zoreaux",
  },
  {
    first_name: "Rebecca",
    last_name: "Welton",
  },
  {
    first_name: "Tedd",
    last_name: "Lasso",
  },
  {
    first_name: "Coach",
    last_name: "Beard",
  },
  {
    first_name: "Nathan",
    last_name: "Shelly",
  },
];

const seedRoster = () => Roster.bulkCreate(rosterData);

module.exports = seedRoster;
