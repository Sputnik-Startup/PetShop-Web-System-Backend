const Animal = require("../models/Animal")

module.exports = {
    async index(req, res){
        const { user_id } = req.headers;
        const { ani_id } = req.headers;

        if(ani_id){
            const animal = await Animal.findOne({ _id: ani_id });

            if(!animal){
                return res.json({erro: "Este animal não existe."})
            }

            return res.json(animal)
        }
        
        const animals = await Animal.find({ dono: user_id });

        if(!animals){
            return res.json({message: "Nenhum animal registrado."})
        }

        return res.json(animals)
    }
}