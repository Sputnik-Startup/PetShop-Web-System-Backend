const Pendente = require("../models/Pendente");

module.exports = {
    async store(req, res){
        const { nomeAnimal, tipoAnimal, racaAnimal, dataAgenda, tipoServicoAgenda } = req.body;

        const pendente = await Pendente.findOne({ dataAgenda });

        if(!pendente){
            pendente = await Pendente.create({ nomeAnimal, tipoAnimal, racaAnimal, dataAgenda, tipoServicoAgenda })
        }

        return res.json(pendente)
    }
}