describe('Note Model', function() {
  it('    initiates with a property called text', function() {
    note = new Note()
    assert.hasProperty(note, "text")
  });

  it('    can save text upon initiation', function() {
    noteText = "new note"
    note = new Note(noteText)
    assert.isEqual(note.text, noteText)
  });

  it('    has serial ID property', function() {
    noteText = "new note"
    note = new Note(noteText)
    assert.hasProperty(note, "_id")
  });

  it('    the serial ids are unique and generate automatically', function() {
    noteText = "new note"
    note = new Note(noteText)
    assert.isEqual(note._id, 0)

  });
});