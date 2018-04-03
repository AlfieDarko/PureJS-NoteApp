// const assert = require('./assert.js');
// const describe = require('./assert.js');
// const it = require('./assert.js');
// const Circle = require('./circle.js');

(describe('Circle', function() {
  it('describes whether circle has a radius of 10', function() {
    var circle = new Circle();
    assert.isTrue(circle.radius === 10);
  });
}))