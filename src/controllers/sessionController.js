const User = require("../models/Cliente");
const nodemailer = require("nodemailer");

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
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, 
                auth: {
                        user: 'petscaocompany@gmail.com', 
                        pass: 'petscao2019'
                },
                tls: { rejectUnauthorized: false },
            });
            
            await transporter.sendMail({
                    from: "'PetsCão' <petscaocompany@gmail.com>", 
                    to: email, 
                    subject: 'Bem vindo ao PetsCão',
                    html: '<div style="display: flex; flex-direction: column; justify-content: center; width: 600px; align-items: center"><div style="display:flex;flex-direction: column; align-items: center;width: 550px;padding: 15px;  background-color: #3c8ad5; color: white;"><div style="background-color: #e69240; width: 500px; padding: 15px 10px; margin-top: 30px; border-radius: 10px;"><h1>Bem vindo ' + nome + '!</h1><br><span style="font-size: 16px;">Agora você faz parte dessa família amantes de animais! S2<br><br>Visite o nosso site para fazer um agendamento, adicionar novos pets ou saber mais sobre nós.<br>http://www.petscao.com.br<br>Agradecemos pela preferência S2<br><br><hr style="background-color: #3c8ad5; width: 100%; border: 0; height: 2px; margin: 40px 0 20px;"><p style="text-align:center">Atenciosamente,<br>Equipe PetsCão.</p></span></div></div></div>'
            });
        }
        return res.json(user);
    }
}