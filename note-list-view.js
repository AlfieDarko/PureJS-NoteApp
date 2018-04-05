(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist
  }

  NoteListView.prototype.returnHTML = function() {
    var htmlString = "<ul>" + this.notelist.notes.map(
      note =>
      `<li><div>${note.text}</div></li>`).join("") + "</ul>"
    return htmlString
  };

  exports.NoteListView = NoteListView
})(this)