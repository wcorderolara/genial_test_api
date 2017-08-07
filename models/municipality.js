
module.exports = function(sequelize, DataTypes) {
    var Municipality = sequelize.define('Municipality', {
        name: {
            type: DataTypes.STRING(75),
            allowNull: false,
            unique:true
        },
        population: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        classMethods: {
            associate: function(models) {
                Municipality.hasMany(models.Info, {foreignKey: {allowNull: true}});
                Municipality.belongsTo(models.SubDivision);
            }
        },
        freezeTableName: true,
        tableName: 'Municipality'
    });

    return Municipality;
}