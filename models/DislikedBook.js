const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create DislikedBook model
class DislikedBook extends Model { }

// Define table columns and configuration
DislikedBook.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'book',
        key: 'isbn'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: `disliked_book`
  }
);

module.exports = DislikedBook;