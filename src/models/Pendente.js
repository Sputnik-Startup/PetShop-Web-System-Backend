const mongoose = require("mongoose");


const pendentesSchema = new mongoose.Schema({
    nomeCliente: String,
    emailCliente: String,
    cpfCliente: String,
    telefoneCliente: String,
    nomeAnimal: String,
    tipoAnimal: String,
    racaAnimal: String,
    dataAgenda: String,
    tipoServicoAgenda: String,
});

module.exports = mongoose.model("Pendente", pendentesSchema);