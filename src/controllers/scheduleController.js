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
  },

  async destroy(req, res){
    const { agenda_id } = req.headers;
    let agenda = await JSON.parse(agenda_id);

    if(agenda_id.length > 1){
      for(let c = 0; c < agenda.length; c++){
        await Schedule.deleteOne({ _id: agenda[c] }, (err)=>{
          if(err){
            return res.json({erro:`Houve um erro ao deletar o agendamento - ${agenda[c]}`});
          }
        })
      }
    }else{
      await Schedule.deleteOne({ _id: agenda }, (err)=>{
        if(err){
          return res.json({erro:`Houve um erro ao deletar o agendamento - ${agenda}`});
        }
      })
    }


    return res.json({message: "Agendamento/s deletado/s com sucesso."})

  },

  async update(req, res){
    const { agenda_id } = req.params;
    let { dataEdit, horaEdit, servicoEdit, status } = req.body;
    let date = dataEdit.split("-");
    dataEdit = `${date[2]}/${date[1]}/${date[0]}`;

    let newSchedule;
    
    const agendaAlreadyExists = await Schedule.findOne({ dataEdit, horaEdit });

    if(status){
      newSchedule = await Schedule.updateOne({ _id: agenda_id }, { data: dataEdit, hora: horaEdit, servico: servicoEdit, status });
    }
    if(agendaAlreadyExists && !status){
      return res.json({erro: "Este horário já foi reservado."});
    }else{
      newSchedule = await Schedule.updateOne({ _id: agenda_id }, { data: dataEdit, hora: horaEdit, servico: servicoEdit });

      if(!newSchedule){
        return res.json({erro: "Houve um erro ao editar o agendamento."});
      }
    }

    return res.json(newSchedule);
  },

  async index(req, res){
    const { user_id, agenda_id } = req.headers;
    
    if(agenda_id){
      let schedules = await Schedule.findOne({ cliente: user_id, status: true }).populate("animal");

      if(!schedules){
        return res.json({erro: "Este agendamento não existe."})
      }

      return res.json(schedules)
    }

    
    let sch = await Schedule.find({ cliente: user_id, status: true}).populate("animal");
    
    if(sch.length === 0){
      return res.json({message: "Nenhum agendamento registrado."});
    }

    return res.json(sch);
  }
}