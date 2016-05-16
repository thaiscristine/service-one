'use strict';

/* express */
var express = require('express');
var app = express();

/* caminho */
var controllers = require('./controllers'); // variavelCaminho// procura pelo arquivo index  (controllers/index) 

/* gets */
app
	.route('/funcao')	 			    // define qual será o caminho (rota)
	.get(controllers.destaques.listar)  // listar // varPastaCaminho.arquivoJS.referenciaDaFuncao (get)
	.post(controllers.destaques.criar)  // criar  // varPastaCaminho.arquivoJS.referenciaDaFuncao (post)

/*app
	.route('/cri')
	.get(controllers.destaques.create) 
	

/* ouvindo porta 3000 */
app.listen(3000, serverLogInit);

function serverLogInit() {
	console.log('> localhost:3000'); // aparecer in terminal to see that its ok
}