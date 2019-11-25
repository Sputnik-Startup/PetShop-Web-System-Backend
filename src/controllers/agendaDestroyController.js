const Schedule = require("../models/Agenda");

module.exports = {
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

  }
}