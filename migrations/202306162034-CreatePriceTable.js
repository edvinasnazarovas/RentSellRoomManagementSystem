'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Prices', {
            price: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            frequency: {
                allowNull: true,
                type: Sequelize.ENUM('Daily', 'Weekly', 'Monthly')
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Prices');
    }
};