//'use strict';
//module.exports = {

	// referencia : funcao(),
	// referencia : funcao(),
	// referencia : funcao()
//};

'use strict';
module.exports = {
	listar: funcList, // referencia : nomeDaFuncao
	criar: funcCriar // referencia : nomeDaFuncao
	/*create: criar*/
}; 

function funcList(req, res) {
	var lista = [		
		{ name: 'André Mello e Diego'},
		{ name: 'Jorge e Mateus'}
	];
	res.json(lista);
}

function funcCriar(req, res) {
	res
		.status(201)
		.json({
			message: 'posted'
		});
}

function criar(req, res){
	// forma a se acostumar
	res
		.status(201)
		.json({
			message: 'created'
		});

	// forma de sempre
	//res.status(201); // status code de sucesso com criacao
}