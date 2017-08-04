'use strict'

module.exports = function(sequelize, DataTypes) {
    var Country = sequelize.define('Country', {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        alpha2Code: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        alpha3Code: {
            type: DataTypes.STRING(3),
            allowNull: true
        },
        isoCode: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        linkToIsoCode: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        independent: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
        flag: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        }
    }, {
        classMethods: {
            associate: function(models) {
                Country.hasOne(models.SubDivision, {foreignKey: {allowNull: false}});
                Country.hasMany(models.Info, {foreignKey: {allowNull: true}});
            }
        },

        freezeTableName: true,
        tableName: 'Country'
    });

    return Country
}