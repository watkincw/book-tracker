const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Book model
class Book extends Model {}

// Define table columns and configuration
Book.init(
  {
    isbn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: `book`
  }
);

module.exports = Book;