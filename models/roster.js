const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Roster extends Model {}

Roster.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    player_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    national_team: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kit_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    former_clubs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    games_played: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    starts: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    goals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shots_on_target: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    assists: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    passes_success_rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    yellow_cards: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    red_cards: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tackle_success_rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "roster",
  }
);

module.exports = Roster;
