describe('>Notelist View', function() {
  it('>>has a function that references to the instantiated notelist ', function() {
    nlview = new NoteListView()

    assert.doesFunctionExist(nlview, this.noteList)
  });

  it('>returns a HTML string representing the notelist', function() {
    nlview = new NoteListView();
    nlview.notelist.createNote('hello')
    nlview.notelist.createNote('goodbye')
    var htmlString = "<ul><li><div>hello</div></li><li><div>goodbye</div></li></ul>"
    assert.isEqual(nlview.returnHTML(), htmlString)
  });
});