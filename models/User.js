const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// create our User model
class User extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        bcrypt.compare(loginPw, this.password, function(err, result) {
            return
        });
    }
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
            isEmail: true
           }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [4]
        }
      }
    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            beforeCreate(newUserData) {
                bcrypt.hash(newUserData.password, 10, function(err, hash) {
                    newUserData.password = hash
                });
                return newUserData;
            },
            // set up beforeUpdate lifecycle "hook" functionality
            beforeUpdate(updatedUserData) {
                bcrypt.hash(updatedUserData.password, 10, function(err, hash) {
                    updatedUserData.password = hash
                });
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;