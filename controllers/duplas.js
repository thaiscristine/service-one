'use strict'; 
module.exports = {
	duplas: function(req, res){
		var lista = [
			{name: "Victor e Leo"},
			{name: "Jorge e Mateus"},
			{name: "André Mello e Diego"},
			{name: "Thaeme e Thiago"},
			{name: "Henrique e Juliano"},
			{name: "Lucas Lucco"},
			{name: "Matheus e Kawan"},
			{name: "Zezé de Camargo e Luciano"}
		];
		res.json(lista);
	}
};