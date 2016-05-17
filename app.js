'use strict';

/* express */
var express = require('express');
var app = express();

/* caminho */
var controllers = require('./controllers'); // variavelCaminho// procura pelo arquivo index  (controllers/index) 

/* gets */
app
	.route('/pagina')	 			    	// define qual será o caminho (rota)
	.get(controllers.destaques.listar)  	// listar 		// varPastaCaminho.arquivoJS.referenciaDaFuncao 
	.post(controllers.destaques.criar)  	// criar  		// varPastaCaminho.arquivoJS.referenciaDaFuncao 
/*	.put(controllers.destaques.atualizar)   // atualizar  	// varPastaCaminho.arquivoJS.referenciaDaFuncao
	.delete(controllers.destaques.deletar)  // deletar  	// varPastaCaminho.arquivoJS.referenciaDaFuncao */

app
	.route('/pagina/:id')	 			    // usuário unico
	/*.get(controllers.destaques.listar)  	// listar 		// varPastaCaminho.arquivoJS.referenciaDaFuncao (get)
	.post(controllers.destaques.criar)  	// criar  		// varPastaCaminho.arquivoJS.referenciaDaFuncao (post)*/
	.put(controllers.destaques.atualizar)   // atualizar  	// varPastaCaminho.arquivoJS.referenciaDaFuncao (post)
	.delete(controllers.destaques.deletar)  // deletar  	// varPastaCaminho.arquivoJS.referenciaDaFuncao (post)

/* ouvindo porta 3000 */
app.listen(3000, serverLogInit);

function serverLogInit() {
	console.log('> localhost:3000'); // aparecer in terminal to see that its ok
}

module.exports = app;