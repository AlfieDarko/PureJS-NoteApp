describe('Single Note View', function() {
  it('    returns a string of HTML that represents the note model', function() {
    var singleNoteView = new SingleNoteView(new Note('hello'))
    var html = "<div>hello</div>"
    assert.isEqual(singleNoteView.returnHTML(), html)
  });
});