const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// create our User model
class User extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compare(loginPw, this.password, function(err, result) {
            // result == true
        });
    }
};

    // sync Password like the one in our lesson
                // checkPassword(loginPw) {
                //     return bcrypt.compareSync(loginPw, this.password);
                
                // Documentation
                //     // bcrypt.compareSync(myPlaintextPassword, hash); // true
                //     // bcrypt.compareSync(someOtherPlaintextPassword, hash); // false
    // async Password is recommended

                // Documentation
                    // bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
                    //     // result == true
                    // });
                    // bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
                    //     // result == false
                    // });



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
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10, function(err, hash) {
                    // Store hash in your password DB.

                });
                return newUserData;
            },
            // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10, function(err, hash) {
                    // Store hash in your password DB.

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