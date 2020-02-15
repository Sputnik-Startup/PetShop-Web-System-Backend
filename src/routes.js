const express = require("express");

const SessionController = require("./controllers/sessionController");
const PendenteController = require("./controllers/pendingController");
const AnimalController = require("./controllers/animalController");
const ScheduleController = require("./controllers/scheduleController");
const HourController = require("./controllers/hourController");
const PerfilController = require("./controllers/getPerfilController");

const routes = express.Router();

routes.post("/login", SessionController.show);

routes.post("/user", SessionController.store);

routes.post("/user/animal", AnimalController.store);

routes.post("/new-schedule", ScheduleController.store)

routes.post("/pending", PendenteController.store);

routes.get("/animal-list", AnimalController.index);

routes.get("/get-hours", HourController.index);

routes.get("/schedule-list", ScheduleController.index);

routes.get("/get-perfil", PerfilController.show);

routes.delete("/destroy-animal", AnimalController.destroy);

routes.delete("/destroy-schedule", ScheduleController.destroy);

routes.put("/edit-animal/:animal_id", AnimalController.update);

routes.put("/edit-user", PerfilController.show);

routes.put("/edit-schedule/:agenda_id", ScheduleController.update);



module.exports = routes;