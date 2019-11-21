const Animal = require("../models/Animal");
const User = require("../models/Cliente");

module.exports = {
    async store(req, res){
        const { nome, tipo, raca } = req.body;
        const { user_id } = req.headers;

        const user = await User.findOne({ _id: user_id})
        if(!user){
            return res.json({ error: "Usuário inexistente." })
        }
        let animal = await Animal.findOne({ nome, tipo, raca, dono: user_id });

        if(!animal){
            animal = await Animal.create({ nome, tipo, raca, dono: user_id  })
        }else{
            return res.json({erro: "Este animal já foi cadastrado"})
        }


        return res.json(animal)
    }
}