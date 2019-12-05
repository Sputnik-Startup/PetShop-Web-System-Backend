const Schedule = require("../models/Agenda");

module.exports = {
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