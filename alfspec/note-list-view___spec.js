describe('Notelist View', function() {
  it('    has a function that references to the instantiated notelist ', function() {
    nlview = new NoteListView()

    assert.doesFunctionExist(nlview, this.notelist)
  });

  it('    returns a HTML string representing the notelist', function() {
    nlview = new NoteListView(new NoteList());
    nlview.notelist.createNote('hello')
    nlview.notelist.createNote('goodbye')
    var htmlString = "<ul><li><div>hello</div></li><li><div>goodbye</div></li></ul>"
    assert.isEqual(nlview.returnHTML(), htmlString)
  });

  it('    should only display the first 20 characters of a note', function() {
    nlview = new NoteListView(new NoteList());
    nlview.notelist.createNote('Shopping list: Bananas, bread, egg, meat, milk, honey. Top up electric with £20')
    var htmlString = "<ul><li><div>Shopping list:...</div></li></ul>"
    assert.isEqual(nlview.returnHTML(), htmlString)

  });
});