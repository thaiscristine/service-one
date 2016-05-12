'use strict';

/* express */
var express = require('express');
var app = express();

/* caminhos */
var destaques = require('./controllers/destaques'); // roteando o caminho e colocando em uma variavel
var duplas = require('./controllers/duplas'); // roteando o caminho e colocando em uma variavel

/* gets */
app.get('/destaques', destaques.destaques);	 // variavel.nome_Da_Lista
app.get('/duplas', duplas.duplas);	 		 // variavel.nome_Da_Lista

/* ouvindo porta 3000 */
app.listen(3000, function(){
	console.log('> localhost:3000'); // aparecer in terminal to see that its ok
});

