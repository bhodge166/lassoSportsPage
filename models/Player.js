const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Player extends Model {}
Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    national_team: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "eng.png",
    },
    position: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "CM",
    },
    kit_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    date_of_birth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    former_clubs: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "n/a",
    },
    games_played: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        isNumeric: true,
      },
    },
    starts: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        isNumeric: true,
      },
    },
    goals: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        isNumeric: true,
      },
    },
    shots_on_target: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        isNumeric: true,
      },
    },
    assists: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        isNumeric: true,
      },
    },
    passes_success_rate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        isNumeric: true,
      },
    },
    yellow_cards: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        isNumeric: true,
      },
    },
    red_cards: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        isNumeric: true,
      },
    },
    tackle_success_rate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        isNumeric: true,
      },
    },
    file_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "silhouette.png",
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "player",
  }
);

module.exports = Player;
