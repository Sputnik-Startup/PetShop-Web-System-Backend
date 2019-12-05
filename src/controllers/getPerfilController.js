const User = require("../models/Cliente");

module.exports = {
  async show(req, res){
    const { user_id } = req.headers;
    const { nome, email, telefone, cpf } = req.body;

    let user = await User.findOne({ _id: user_id });

    if(!nome && !email && !telefone && !cpf){
      if(!user){
        return res.json({erro: "Usuário inexistente."});
      }
    }else{
      user = await User.updateOne({_id: user_id}, { nome, email, cpf, telefone });

      if(!user){
        return res.json({erro: "Erro ao editar"})
      }
    }

    return res.json(user);
  }
}