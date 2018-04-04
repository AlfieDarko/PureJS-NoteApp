(describe('>Circle', function() {
  it('>>describes whether circle has a radius of 10', function() {
    var circle = new Circle();
    assert.isTrue(circle.radius === 10);
  });
}))