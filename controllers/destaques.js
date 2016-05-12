'use strict';
module.exports = {
	destaques: function(req, res) {
		var lista = [		
			{ name: 'André Mello e Diego' },
			{ name: 'Jorge e Mateus'}
		];
		res.json(lista);
	}
}; 