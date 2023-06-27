const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
const tipos = new require('./tipos')
const Usuario = new require('./Usuario')
class Tarefas extends Model{}
Tarefas.init({
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prioridade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_conclusao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_cadastro: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize,
    modelName:'Tarefas'
}
)
tipos.hasMany(Tarefas)
Tarefas.belongsTo(tipos)

Usuario.hasMany(Tarefas)
Tarefas.belongsTo(Usuario)

sequelize.sync()
module.exports = Tarefas
