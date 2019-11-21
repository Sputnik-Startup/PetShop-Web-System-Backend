const Animal = require("../models/Animal");

module.exports = {
  async destroy(req, res){
    const { ani_id } = req.headers;
    let ani = JSON.parse(ani_id)

    for(let c = 0; c < ani.length; c++){
      Animal.deleteOne({ _id: ani[c] }, (err)=>{
        if(err){
          return res.json({erro:`Houve ao deletar o animal com o id: ${ani[c]}`});
        }
      })
    }


  }
}