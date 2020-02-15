const Animal = require("../models/Animal");
const User = require("../models/Cliente");

module.exports = {
    async store(req, res){
        const { nome, tipo, raca } = req.body;
        const { user_id } = req.headers;

        const user = await User.findOne({ _id: user_id})
        if(!user){
            return res.json({ error: "Usuário inexistente." })
        }
        let animal = await Animal.findOne({ nome, tipo, raca, dono: user_id });

        if(!animal){
            animal = await Animal.create({ nome, tipo, raca, dono: user_id  })
        }else{
            return res.json({erro: "Este animal já foi cadastrado"})
        }


        return res.json(animal)
    },
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
    },

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
    
    },

    async index(req, res){
        const { user_id } = req.headers;
        const { ani_id } = req.headers;

        if(ani_id){
            const animal = await Animal.findOne({ _id: ani_id });

            if(!animal){
                return res.json({erro: "Este animal não existe."})
            }

            return res.json(animal)
        }
        
        const animals = await Animal.find({ dono: user_id });

        if(animals.length === 0){
            return res.json({message: "Nenhum animal registrado."})
        }

        return res.json(animals)
    }

}