'use strict';

const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    var Room = sequelize.define('Room', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        type: 
        {
            allowNull: false,
            type: DataTypes.ENUM('Single', 'Double', 'Apartament', 'Other'),
            defaultvalue: 'Other'
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
        floor_number: {
            allowNull: true,
            type: DataTypes.STRING
        },
        door_number: {
            allowNull: true,
            type: DataTypes.STRING
        },
        size: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        description: {
            allowNull: true,
            type: DataTypes.STRING,
        }
    });

    Room.associate = models => {
        Room.belongsTo(models.User);
        Room.hasMany(models.Amenity, { as: 'amenities', onDelete: 'cascade' });
        Room.belongsTo(models.Price, { foreignKey: 'RoomId' });
    };



    return Room;    
}