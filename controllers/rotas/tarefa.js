const model = new require('../../models/tarefa')
const usuario = new require('../../models/Usuario')
const tipos = new require('../../models/tipos')
const rota = 'tarefa'
module.exports = (app)=>{
    app.post(`/cadastrar/${rota}`, async (req, res)=>{
        let dados = req.body
        let resBd = await model.create(dados)
        res.json(resBd)
    })

    app.get(`/consultar/${rota}/:id`, async (req, res)=>{
        try {
            let dados = req.params.id?
            await model.findOne({include:[{model:usuario}, {model:tipos}]}, {where:{id:req.params.id}}) :
            await model.findAll({include:[{model:usuario}, {model:tipos}]}, {raw: true, order:[['id','DESC']]}) 
            res.json(dados).status(200)
        } catch (erro){
            res.json(erro).status(400)
        }
    })

    app.put(`/atualizar/${rota}/:id`, async (req, res) => {
        let id = req.params.id
        let dados = req.body
        let respBd = await model.update(dados, {where:{id:id}})
        res.json(respBd)
    })

    app.delete(`/excluir/${rota}/:id`, async (req, res) => {
        let id = req.params.id
        let respBd = await model.destroy({where:{id:id}})
        res.json(respBd)
    })
}