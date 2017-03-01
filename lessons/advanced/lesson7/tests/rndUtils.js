var assert = require('chai').assert;
var sinon = require('sinon');

var getRandomElement = require('../src/rndUtils');

var random = sinon.stub(Math, 'random');

suite('getRandomElement');

test('POSITIVE', function() {
    var array = [5, 7, 22, 38];

    random.returns(0.5);
    assert.equal( getRandomElement(array), 22 );

    random.returns(0.000000001);
    assert.equal( getRandomElement(array), 5 );

    random.returns(0.99999999999);
    assert.equal( getRandomElement(array), 38 );
});
