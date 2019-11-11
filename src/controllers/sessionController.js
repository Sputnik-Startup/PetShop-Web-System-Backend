const User = require("../models/Cliente");

module.exports = {
    async store(req, res){
        const { nome, email, cpf, telefone } = req.body;

        let user = await User.findOne({ nome, email, cpf, telefone })

        if(!user){
            user = await User.create({ nome, email, cpf, telefone })

        }
        return res.json(user)
    }
}