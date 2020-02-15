const User = require("../models/Cliente");

module.exports = {
    async store(req, res){
        const { nome, email, cpf, telefone } = req.body;

        let user = await User.findOne({ cpf }) || await User.findOne({ email });

        if(nome === "" || cpf === "" || email === "" || telefone === ""){
            return res.json({erro:"Por favor, preencha todos os campos abaixo."})
        }
        if(user){
            return res.json({erro: "Este usuário já existe"})
        }else{
            user = await User.create({ nome, email, cpf, telefone });
        }
        return res.json(user);
    },

    async show(req, res){
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