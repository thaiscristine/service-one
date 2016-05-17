
'use strict';
let Router = require('express').Router; // maiuscula por ser construtor
let router = new Router();
/* caminho */
let controllers = require('../controllers'); // variavelCaminho// procura pelo arquivo index  (controllers/index) 

router
	.route('/pagina')	 			    // define qual será o caminho (rota)
	.get(controllers.duplas.listar)  	// listar 		// varPastaCaminho.arquivoJS.referenciaDaFuncao 
	.post(controllers.duplas.criar)  	// criar  		// varPastaCaminho.arquivoJS.referenciaDaFuncao 

router
	.route('/pagina/:id')	 			// usuário unico
	.get(controllers.duplas.listar)  	// listar 		// varPastaCaminho.arquivoJS.referenciaDaFuncao (get)
	.put(controllers.duplas.atualizar)  // atualizar  	// varPastaCaminho.arquivoJS.referenciaDaFuncao (post)
	.delete(controllers.duplas.deletar) // deletar  	// varPastaCaminho.arquivoJS.referenciaDaFuncao (post)

module.exports = router;	