
module.exports = function(sequelize, DataTypes) {
    var Info = sequelize.define('Info', {
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        etymology: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        history: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        geography: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        demographics: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        government: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        economy: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        infrastructure: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        education: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        culture: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        mortality: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        freezeTableName: true,
        tableName: 'Info'
    });

    return Info;
}