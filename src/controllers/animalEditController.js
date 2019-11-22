const Animal = require("../models/Animal");

module.exports =  {
  async update(req, res){
    const { nomeEdit, tipoEdit, racaEdit } = req.body;
    const { user_id } = req.headers;
    const { animal_id } = req.params;

    let animal = await Animal.findOne({ _id: animal_id, dono: user_id });

    if(animal){
      animal = await Animal.updateOne({_id: animal_id},{nome: nomeEdit, tipo: tipoEdit, raca: racaEdit}, (err)=>{
        if(err){
          return res.json({erro: "Houve um erro ao editar."})
        }
      });
    }

    return res.json(animal)

  }
}