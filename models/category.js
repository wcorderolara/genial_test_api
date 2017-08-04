
module.exports = function(sequelize, DataTypes) {
    
    var Category = sequelize.define('Category', {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        }
    }, {
        classMethods: {
            associate: function(models) {
                Category.hasOne(models.SubDivision);
            }
        },
        freezeTableName: true,
        tableName: 'Category'
    });

    return Category;
}