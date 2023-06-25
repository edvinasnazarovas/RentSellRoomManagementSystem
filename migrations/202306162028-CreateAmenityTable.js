'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Amenities', {
            room_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'Rooms',
                    key : 'id'
                },
                allowNull: false,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Amenities');
    }
};