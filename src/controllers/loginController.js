const User = require("../models/Cliente");

module.exports = {
    async store(req, res){
        const { email } = req.body;

        const user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({erro: "Usuário não encontrado."});
        }

        return res.json(user)
    }
}