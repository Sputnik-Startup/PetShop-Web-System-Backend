const express = require("express");

const SessionController = require("./controllers/sessionController");
const PendenteController = require("./controllers/pendenteController");
const AnimalController = require("./controllers/animalController");
const LoginController = require("./controllers/loginController");
const ListController = require("./controllers/listController");
const ScheduleController = require("./controllers/agendaController");

const routes = express.Router();

routes.post("/login", LoginController.store);

routes.post("/user", SessionController.store);

routes.post("/user/animal", AnimalController.store);

routes.post("/new-schedule", ScheduleController.store)

routes.get("/animal-list", ListController.index);

routes.post("/schedules", PendenteController.store);


module.exports = routes;