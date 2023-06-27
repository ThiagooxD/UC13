const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
class Tipos extends Model{}
Tipos.init({
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize,
    modelName:'tipos'
}
)
sequelize.sync()
module.exports = Tipos