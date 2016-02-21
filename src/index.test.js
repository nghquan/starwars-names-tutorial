var expect = require('chai').expect;
var starWars = require('./index');
//require Chai and we pull of expect off of Chai
describe('starwars-names',function(){
    describe('all',function(){
        //it: from mocha
    it('should work!', function(){
        expect(true).to.be.true;
    });
        
        it('should be an array of strings',function(){
            expect(starWars.all).to.satisfy(isArrayOfStrings);
            function isArrayOfStrings(array){
                return array.every(function(item){
                    return typeof item ==='string';
                })
            };
        });
        
        it('should contain Luke Skywalker',function(){
            expect(starWars.all).to.include('Luke Skywalker');
        });
    });
    
    describe('random',function(){
        it('should return a random item from the starWars.all',function(){
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        });
    });
});