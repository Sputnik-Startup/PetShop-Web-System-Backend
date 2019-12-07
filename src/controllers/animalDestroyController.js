const Animal = require("../models/Animal");
const Pend = require("../models/Pendente");

module.exports = {
  async destroy(req, res){
    const { ani_id } = req.headers;
    let ani = await JSON.parse(ani_id)

    if(ani.length > 1){
      for(let c = 0; c < ani.length; c++){
        await Animal.deleteOne({ _id: ani[c] }, (err)=>{
          if(err){
            return res.json({erro:`Houve ao deletar o animal com o id: ${ani[c]}`});
          }
        })
      }
    }else{
      await Animal.deleteOne({ _id: ani }, (err)=>{
        if(err){
          return res.json({erro:`Houve ao deletar o animal com o id: ${ani}`});
        }
      })
      await Pend.deleteOne({ animal: ani });
    }

    return res.json({message: "Dados deletados com sucesso."})

  }
}