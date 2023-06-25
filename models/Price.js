'use strict';
module.exports = (sequelize, DataTypes) => {
    var Price = sequelize.define('Price', {
        price: {
            allowNull: false,
            type: DataTypes.STRING
        },
        frequency: {
            allowNull: true,
            type: DataTypes.ENUM('Daily', 'Weekly', 'Monthly')
        }
    });

    return Price;
}