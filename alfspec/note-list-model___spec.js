describe('>NoteList', function() {
  it('>>initiates with an empty array', function() {
    notelist = new NoteList();
    assert.isArrayEmpty(notelist.allNotes())
  });

  it('>>.createNote() creates a note onbect with the text we pass in', function() {
    notelist = new NoteList();
    notelist.createNote("hello")
    assert.doesObjectContain(notelist.notes[0], "hello")
  });
});