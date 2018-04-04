describe('NoteList', function() {
  it('initiates with an empty array', function() {
    notelist = new NoteList();
    assert.isArrayEmpty(notelist.allNotes())
  });
});