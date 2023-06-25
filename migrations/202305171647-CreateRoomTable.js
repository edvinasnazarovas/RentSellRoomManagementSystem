'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Rooms', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            type: {
                allowNull: false,
                type: Sequelize.ENUM('Single', 'Double', 'Apartament', 'Other'),
                defaultValue: 'Other'
            },
            country: {
                type: Sequelize.STRING,
                allowNull: false
            },
            city: {
                allowNull: false,
                type: Sequelize.STRING
            },
            address: {
                allowNull: false,
                type: Sequelize.STRING
            },
            floor_number: {
                allowNull: true,
                type: Sequelize.STRING
            },
            door_number: {
                allowNull: true,
                type: Sequelize.STRING
            },
            size: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            description: {
                type: Sequelize.STRING,
                defaultValue: null
            },
            /*price_freq: {
                type: Sequelize.ENUM('Per Day', 'Per Week', 'Per Month')
            },*/
            owner: {
                type: Sequelize.UUID,
                references: {
                    model: 'Users',
                    key : 'id'
                },
                allowNull: false,
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Rooms');
    }
};