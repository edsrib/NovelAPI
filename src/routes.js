const express = require('express');
const PessoasController = require('../controllers/PessoasController');
const routes = express.Router();

const EditarPessoa = require('../controllers/EditarPessoaController');


routes.post('/listarID/:id',PessoasController.listarID);
routes.post('/listarCidade/:cidade',PessoasController.listarCidade);
routes.post('/listarEmail/:email',PessoasController.listarEmail)
routes.post('/incluir',PessoasController.incluir)
routes.post('/editarPessoa',EditarPessoa.editarPessoa)
routes.post('/excluir/:id',PessoasController.excluir)

module.exports = routes;