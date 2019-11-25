const Agenda = require('../models/Agenda');

module.exports = {
  async store(req, res){
    const { user_id } = req.headers;
    let { animal, data, hora, servico } = req.body;

    const agendaAlreadyExists = await Agenda.findOne({ data, hora });
    let agenda;

    if(agendaAlreadyExists){
      return res.json({erro: "Este horário já foi reservado."});

    }else{
      agenda = await Agenda.create({ cliente: user_id, animal, data, hora, servico });

    }

    return res.json(agenda);
  }
}