const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const IncidentController = require("./controllers/IncidentController");
const OngController = require("./controllers/OngController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.store);

routes.get('/ongs/:id/incidents', IncidentController.list);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);
routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required(),
    })
}), IncidentController.store);
routes.delete('/incidents/:id', celebrate({
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

module.exports = routes;
