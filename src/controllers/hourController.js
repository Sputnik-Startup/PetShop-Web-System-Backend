const Schedule = require("../models/Agenda");

module.exports = {
  async index(req, res){
    const { data } = req.headers;
    
    const agenda = await Schedule.find({ data })

    return res.json(agenda)
  }
}