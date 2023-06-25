'use strict';
module.exports = (sequelize, DataTypes) => {
  var Payment = sequelize.define('Payment', {
    date: {
      type: DataTypes.DATE
    },
    customer_id: {
      type: DataTypes.UUID,
      allowNull: false
    }
  });

  Payment.associate = models => {
    Payment.belongsTo(models.User, { foreignKey: 'customer_id' });
  };

  Payment.associate = models => {
    Payment.belongsTo(models.Room);
  };

  return Payment;
};
