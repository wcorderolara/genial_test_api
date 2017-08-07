
module.exports = function(sequelize, DataTypes) {
    var SubDivision = sequelize.define('SubDivision', {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        code: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        alpha2Code: {
            type: DataTypes.STRING(2),
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
                SubDivision.hasMany(models.Municipality);
                SubDivision.hasMany(models.Info, {foreignKey: {allowNull: true}});
                SubDivision.belongsTo(models.Category);
                SubDivision.belongsTo(models.Country);
            }
        },
        freezeTableName: true,
        tableName: 'SubDivision'
    });

    return SubDivision;
}