const Schedule = require("../models/Agenda");

module.exports = {
  async index(req, res){
    const { agenda_id } = req.params;
    let { dataEdit, horaEdit, servicoEdit } = req.body;
    let date = dataEdit.split("-");
    dataEdit = `${date[2]}/${date[1]}/${date[0]}`;

    let newSchedule;
    
    const agendaAlreadyExists = await Schedule.findOne({ dataEdit, horaEdit });

    if(agendaAlreadyExists){
      return res.json({erro: "Este horário já foi reservado."});
    }else{
      newSchedule = await Schedule.updateOne({ _id: agenda_id }, { data: dataEdit, hora: horaEdit, servico: servicoEdit });

      if(!newSchedule){
        return res.json({erro: "Houve um erro ao editar o agendamento."});
      }
    }

    return res.json(newSchedule);
  }
}