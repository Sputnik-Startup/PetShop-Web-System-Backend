const mongoose = require("mongoose");


const pendentesSchema = new mongoose.Schema({
    nomeAnimal: String,
    tipoAnimal: String,
    racaAnimal: String,
    dataAgenda: String,
    tipoServicoAgenda: String,
});

module.exports = mongoose.model("Pendente", pendentesSchema);