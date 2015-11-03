var assert = require('chai').assert;

suite('SQRT function');

test('POSITIVE: Math.sqrt(64)', function() {
    assert.equal(Math.sqrt(64), 8);
});

test('POSITIVE: Math.sqrt(64.8)', function() {
    var got = Math.sqrt(64.8);
    var expected = 8.0498;

    assert.ok( Math.abs( got - expected ) < 0.001);
});

test('POSITIVE: Math.sqrt(1)', function() {
    assert.equal(Math.sqrt(1), 1);
});

test('NEGATIVE: Math.sqrt(-1)', function() {
    assert.ok( isNaN( Math.sqrt(-1) ) );
});
