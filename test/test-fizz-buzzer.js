//import chai, declair should variable
const should = require('chai').should();

//import fizz-buzz
const fizzBuzz = require('../fizz-buzz');

//unit test for 'fizz-buzz' function
describe('fizz-buzz', function(){
	//test the normal case
it('should return "fizz-buzz for multiple of 15', function(){
    [15, 30, 45].forEach(function(input){
        fizzBuzz(input).should.equal('fizz-buzz');
    });
});	

it('should return "fizz" for multiple of 3', function(){
    [3, 6, 9, 12].forEach(function(input){
        fizzBuzz(input).should.equal('fizz');
    });
});

it('should return "buzz" for multiple of 5', function(input){
    [5, 10, 15].forEach(function(input){
        fizzBuzz(input).should.equal('buzz');
    });
});

it('should return number if not mult of 3 or 5', function(input){
    [1, 2, 4, 7].forEach(function(input){
        fizzBuzz(input).should.equal(input);
    });
});

it('should produce an error if input isn\'t number', function(){
    const badInput = [true, false, 'cat', fucntion() {}, [1, 2, 3]]
    badInput.forEach(function(input) {
    (function(){
        fizzBuzz(input)
    }).should.throw(Error);    
    });
    });
});