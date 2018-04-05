describe('>Notelist View', function() {
  it('>>has a function that references to the instantiated notelist ', function() {
    nlview = new NoteListView()

    assert.doesFunctionExist(nlview, this.NoteList)
  });

  it('>returns a HTML string representing the notelist', function() {
    nlview = new NoteListView();

    assert.nlview.returnHTML()
  });
});