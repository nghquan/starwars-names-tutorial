var expect = require('chai').expect;
var starWars = require('./../src/index');

describe('second starwars-names',function(){
    describe('all',function(){
        //it: from mocha
    it('should work for sure!', function(){
        expect(true).to.be.true;
    });
        
        it('should be an array of strings for sure',function(){
            expect(starWars.all).to.satisfy(isArrayOfStrings);
            function isArrayOfStrings(array){
                return array.every(function(item){
                    return typeof item ==='string';
                })
            };
        });
        
        it('should contain Luke Skywalker for sure',function(){
            expect(starWars.all).to.include('Luke Skywalker');
        });
    });
    
    describe('random',function(){
        it('should return a random item from the starWars.all for sure',function(){
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        });
    });
});