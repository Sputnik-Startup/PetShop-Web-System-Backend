const mongoose = require('mongoose');

const AgendaSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  animal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Animal"
  },
  data: String,
  hora: String,
  servico: String,

})

module.exports = mongoose.model("Agenda", AgendaSchema)