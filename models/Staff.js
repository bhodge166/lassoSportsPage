const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Staff extends Model {}

Staff.init(
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

    nationality: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "eng.png",
      validate: {
        isAlpha: true,
      },
    },

    occupation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    former_clubs: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "na",
      validate: {
        isAlpha: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "staff",
  }
);

module.exports = Staff;
