'use strict';

/* express */
var express = require('express');
var app = express();
var routers = require('./routers/index.js'); // nao precisa escrever index..

// criar "roteadores"
app.use('/api', routers.api) // ('prefixo', ) 

/* ouvindo porta 3000 */
app.listen(3000, serverLogInit);

function serverLogInit() {
	console.log('> localhost:3000'); // aparecer in terminal to see that its ok
}

module.exports = app;