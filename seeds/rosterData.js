const { Gallery } = require("../models");

const rosterData = [
  {
    player_name: "Roy Kent",
    national_team: "England",
    position: "CM",
    kit_number: 6,
    date_of_birth: "July 6",
    former_clubs: "Sunderland AFC, Chelsea F.C.",
    games_played: 27,
    starts: 27,
    goals: 2,
    shots_on_target: "11",
    assists: 2,
    passes_success_rate: 0.89,
    yellow_cards: 2,
    red_cards: 0,
    tackle_success_rate: 0.62,
  },
];

const seedRoster = () => Roster.bulkCreate(rosterData);

module.exports = seedRoster;
