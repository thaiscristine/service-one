

'use strict';

var app = require('../../app.js');
var request = require('supertest');
var chai = require('chai');
chai.use(require('chai-things')); // usando chai como variavel
var expect = chai.expect;


describe('Users controller', function(){
  describe('.list - GET /pagina', function(){
    it('deve retornar a json array', function(done){ // done como argumento do it
      request(app)
        .get('/pagina')
        .end(function(err, res){
          expect(res.statusCode).to.be.equal(201);//expect(res.Code.be.an('array'));
          expect(res.body).to.be.an('array');
          expect(res.body)
            .all.have.property('name');
            //.to.be.an('string');
          done(); // chamar a funcao done
        }); // end retorno do request
    });

    it('test de comportamento 2', function(){
      
    });
  });
});