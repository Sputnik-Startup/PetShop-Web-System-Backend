const express = require("express");
const SessionController = require("./controllers/sessionController");
const PendenteController = require("./controllers/pendenteController");

const routes = express.Router();

routes.post("/sessions", SessionController.store);

routes.post("/schedules", PendenteController.store);


module.exports = routes;