const express = require("express");

const SessionController = require("./controllers/sessionController");
const PendenteController = require("./controllers/pendenteController");
const AnimalController = require("./controllers/animalController");
const LoginController = require("./controllers/loginController");
const ListController = require("./controllers/listController");
const ScheduleController = require("./controllers/agendaController");
const HourController = require("./controllers/hourController");
const AnimalDestroyController = require("./controllers/animalDestroyController");
const AnimalEditController = require("./controllers/animalEditController");
const ScheduleListController = require("./controllers/agendaListController");
const ScheduleDestroyController = require("./controllers/agendaDestroyController");
const ScheduleEditController = require("./controllers/agendaEditController");

const routes = express.Router();

routes.post("/login", LoginController.store);

routes.post("/user", SessionController.store);

routes.post("/user/animal", AnimalController.store);

routes.post("/new-schedule", ScheduleController.store)

routes.post("/schedules", PendenteController.store);

routes.get("/animal-list", ListController.index);

routes.get("/get-hours", HourController.index);

routes.get("/schedule-list", ScheduleListController.index);

routes.delete("/destroy-animal", AnimalDestroyController.destroy);

routes.delete("/destroy-schedule", ScheduleDestroyController.destroy);

routes.put("/edit-animal/:animal_id", AnimalEditController.update);

routes.put("/edit-schedule/:agenda_id", ScheduleEditController.index);



module.exports = routes;