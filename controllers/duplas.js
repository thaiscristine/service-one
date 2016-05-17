'use strict';

module.exports = {

	// multipleUsers
	listar	     : funcList,  		// referencia : nomeDaFuncao,
	criar 	   	 : funcCriar, 		// referencia : nomeDaFuncao,
	// singleUser
	listarSingle : funcListSingle, 	// referencia : nomeDaFuncao
	deletar      : funcDel,			// referencia : nomeDaFuncao,
	atualizar    : funcUpdate		// referencia : nomeDaFuncao

};

function funcList(req, res) {

	var lista = [		
		{ name: 'André Mello e Diego'},
		{ name: 'Jorge e Mateus'},
		{ name: 'LISTANDO'}
	];
	res
		.status(201)
		.json(lista);
}

function funcCriar(req, res) {
	res
		.status(201)
		.json({
			message: 'criado'
		});
		//res.status(201); // status code de sucesso com criacao
}

// SingleUser

function funcListSingle(req, res){
 // console.log(req.params);
	var user = { name: 'Jorge e Mateus'};
	res.json(user);
}

function funcUpdate(req,res){
	var user = { name: 'Tha'};
	res.json({
		message: 'updated'
	});
}

function funcDel(req,res){
	var user = { name: ''};
	res.json({
		message: 'deleted'
	});
}
