describe('NoteList', function() {
  it('initiates with an empty array', function() {
    notelist = new Notelist();
    assert.isArrayEmpty(notelist.allNotes())
  });
});