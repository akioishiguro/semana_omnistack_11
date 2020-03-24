const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Login
routes.post('/session',SessionController.create)

//Listando Ongs
routes.get('/ongs', OngController.index);
//Criando Ong
routes.post('/ongs', OngController.create);

//Listando um unido Incidents
routes.get('/profile', ProfileController.index);

//Criando Incidents
routes.post('/incidents', IncidentController.create);
//Listando Incidents
routes.get('/incidents', IncidentController.index);
//Deletando Incidents
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;