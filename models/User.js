'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        email: 
        {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        first_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        last_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        phone_number: {
            allowNull: true,
            type: DataTypes.STRING
        },
        country: {
            allowNull: false,
            type: DataTypes.STRING
        },
        city: {
            allowNull: false,
            type: DataTypes.STRING
        },
        address: {
            allowNull: false,
            type: DataTypes.STRING
        },
        preferred_pay_method: {
            allowNull: true,
            type: DataTypes.ENUM('Credit Card', 'Cash', 'Online Banking')
        },
        RoleID: {
            allowNull: true,
            type: DataTypes.INTEGER
        }
    });

    return User;
}