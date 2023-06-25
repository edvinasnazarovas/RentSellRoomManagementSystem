'use strict';
module.exports = (sequelize, DataTypes) => {
    var Amenity = sequelize.define('Amenity', {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }
    });

    Amenity.associate = models => {
        Amenity.belongsTo(models.Room);
      };
      

    return Amenity;
}