describe('Notelist View', function() {
  it('    has a function that references to the instantiated notelist ', function() {
    nlview = new NoteListView()

    assert.doesFunctionExist(nlview, this.notelist)
  });

  it('    returns a HTML string representing the notelist', function() {
    nlview = new NoteListView(new NoteList());
    nlview.notelist.createNote('hello')
    nlview.notelist.createNote('goodbye')
    var htmlString = "<ul><a href='#notes/0'><li><div>hello</div></li></a><a href='#notes/1'><li><div>goodbye</div></li></a></ul>"
    assert.isEqual(nlview.returnHTML(), htmlString)
  });

  it('    should only display the first 20 characters of a note', function() {
    nlview = new NoteListView(new NoteList());
    nlview.notelist.createNote('Shopping list: Bananas, bread, egg, meat, milk, honey. Top up electric with £20')
    var htmlString = "<ul><a href='#notes/0'><li><div>Shopping list:...</div></li></a></ul>"
    assert.isEqual(nlview.returnHTML(), htmlString)
  });

  it('    it note should link to its own url', function() {
    nlview = new NoteListView(new NoteList());
    var linkContains = "<a href='#notes/1'>"

  });
});