describe('Note Controller', function() {
  it('    listens to hashchange events', function() {
    nc = new NoteController();
    assert.doesFunctionExist(nc.hashChangeThenShowNote())
  });

  it('    changes content according to url', function() {

  });

  it('    reveals full text note on click', function() {

  });
});