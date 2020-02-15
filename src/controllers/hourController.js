const Schedule = require("../models/Agenda");

module.exports = {
  async index(req, res){
    let { data } = req.headers;
    let { dataEdit } = req.body;
    let date;
    let agenda;
    if(dataEdit){
      date = dataEdit.split("-");
      dataEdit = `${date[2]}/${date[1]}/${date[0]}`;
      agenda = await Schedule.find({ data })
    }
    if(data){
      date = data.split("-");
      data = `${date[2]}/${date[1]}/${date[0]}`;
      agenda = await Schedule.find({ data })
    }
      

    return res.json(agenda)
  }
}