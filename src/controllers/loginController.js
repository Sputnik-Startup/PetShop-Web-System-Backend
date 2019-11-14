const User = require("../models/Cliente");

module.exports = {
    async store(req, res){
        const { cpf } = req.body;

        const user = await User.findOne({ cpf });

        if(!user){
            return res.json({erro: "Usuário não encontrado."});
        }
        if(cpf === ""){
            return res.json({erro:"Por favor, preencha todos os campos abaixo."})
        }

        return res.json(user);
    }
}