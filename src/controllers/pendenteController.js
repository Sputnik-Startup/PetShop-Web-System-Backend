//It is only to intagrate the system web with desktop system. (sure its a quick fix )

const Pendente = require("../models/Pendente");
// const User = require("../models/Cliente");
// const Animal = require("../models/Animal");

module.exports = {
    async store(req, res){
        const { user_id, animal_id, agenda_id } = req.headers
        const { data, hora, servico } = req.body;

        // let cliente = User.findOne({ _id: user_id });
        // let animal = Animal.findOne({ _id: animal_id });
        let pendente = await Pendente.findOne({ cliente: user_id, animal: animal_id, agendamento: agenda_id, data, hora });

        if(!pendente){
            pendente = await Pendente.create({ cliente: user_id, animal: animal_id, agendamento: agenda_id, data, hora, servico })
        }else{
            return res.json({erro: "Houve um erro."})
        }

        return res.json(pendente)
    }
}