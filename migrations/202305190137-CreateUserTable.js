'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: true,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE
            },
            first_name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            last_name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING
            },
            phone_number: {
                allowNull: true,
                type: Sequelize.STRING
            },
            preferred_pay_method: {
                allowNull: true,
                type: Sequelize.ENUM('Credit Card', 'Cash', 'Online Banking')
            },
            country: {
                allowNull: false,
                type: Sequelize.STRING
            },
            city: {
                allowNull: false,
                type: Sequelize.STRING
            },
            address: {
                allowNull: false,
                type: Sequelize.STRING
            },
            RoleID: {
                allowNull: true,
                type: Sequelize.INTEGER
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};