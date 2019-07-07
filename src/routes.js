const express = require('express');
const routes = express.Router();

const ProfissionalController = require('./controller/ProfissionalController');

routes.get("/profissional",ProfissionalController.searchProfissional);
routes.post("/profissional",ProfissionalController.addProfissional);
routes.put("/profissional/:id",ProfissionalController.updateProfissional);
routes.delete("/profissional/:id",ProfissionalController.deleteProfissional);

module.exports = routes;