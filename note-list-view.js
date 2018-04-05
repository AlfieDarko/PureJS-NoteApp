(function(exports) {
  function NoteListView() {
    this.notelist = new NoteList();
  }

  NoteListView.prototype.returnHTML = function() {
    var htmlString = "<ul>" + this.notelist.notes.map(
      note =>
      `<li><div>${note.text}</div></li>`).join("") + "</ul>"
    return htmlString
  };

  exports.NoteListView = NoteListView
})(this)