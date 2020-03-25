const express = require("express");

const IncidentsController = require("./controllers/IncidentController");
const OngController = require("./controllers/OngController");

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/ongs/:id/incidents', IncidentsController.list);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;
