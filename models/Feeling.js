const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create Feeling model
class Feeling extends Model {}

// Define table columns and configuration
Feeling.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      // acceptable values: 'like', 'dislike', or 'wish'
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    book_isbn: {
      type: DataTypes.STRING,
      references: {
        model: "book",
        key: "isbn",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "feeling",
  }
);

module.exports = Feeling;
