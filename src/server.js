const express = require("express");
const routes = require('./routes')
const mongoose = require('mongoose');
const cors = require("cors")

const app = express();

mongoose.connect("mongodb+srv://maxuser:maol963662339@omnistack-pqlxe.mongodb.net/PetsCao", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json());
app.use(routes);

const PORT = 4041;
app.listen(PORT);