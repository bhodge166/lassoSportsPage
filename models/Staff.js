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
    },

    occupation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    former_clubs: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "na",
      validate: {
        isAlpha: true,
      },
    },
    file_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "ted_lasso_staff.png",
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
