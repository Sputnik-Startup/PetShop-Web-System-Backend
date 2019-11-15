const Animal = require("../models/Animal")

module.exports = {
    async store(req, res){
        const { user_id } = req.headers;

        const animals = await Animal.find({ dono: user_id });

        if(!animals){
            return res.json({message: "Nenhum animal registrado."})
        }

        return res.json(animals)
    }
}