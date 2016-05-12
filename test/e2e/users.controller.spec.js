/*'use strict'; 
var app = require('../../app.js');

describe('testando algo', function(){
    describe('testando algo de algo', function(){
        /*it test('test de comportamento 1' function(){

        });

        it test('test de comportamento 2' function(){

        });*
    });
});

*/


'use strict';

describe('Users controller', function(){
    describe('.list - GET /users', function(){
        it('should return a json array', function(done){
            request(app)
                .get('/users')
                .end(function(err, res){
                    expect(res.statusCode).to.be.equal(201)//expect(res.Code.be.an('array'));
                    console.log(res);
                    done();
                }); // end retorno do request
        });

        it('test de comportamento 2', function(){

        });
    });
});

/*
var assert = require('chai').assert;
describe('Nome do teste', function() {
  it('should list ALL blobs on /blobs GET');	
  describe('#nomeDaFunção()', function () {
    it('Deve retornar -1 quando o valor nao for apresentado', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Blobs', function() {
  it('should list ALL blobs on /blobs GET');
  it('should list a SINGLE blob on /blob/<id> GET');
  it('should add a SINGLE blob on /blobs POST');
  it('should update a SINGLE blob on /blob/<id> PUT');
  it('should delete a SINGLE blob on /blob/<id> DELETE');
});
*/
