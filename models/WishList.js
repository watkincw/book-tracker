const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create WishList model
class WishList extends Model { }

// Define table columns and configuration
WishList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    book_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'book',
        key: 'isbn'
      }
    },
    user_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: `WishList`
  }
);

module.exports = WishList;