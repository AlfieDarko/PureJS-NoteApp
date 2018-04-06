(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist
  }

  String.prototype.trunc =
    function(n, useWordBoundary) {
      if (this.length <= n) {
        return this;
      }
      var subString = this.substr(0, n - 1);
      return (useWordBoundary ?
        subString.substr(0, subString.lastIndexOf(' ')) :
        subString) + "...";
    };

  NoteListView.prototype.returnHTML = function() {
    var htmlString = "<ul>" + this.notelist.notes.map(
      note =>
      `<li><div>${note.text.trunc(20, true)}</div></li>`).join("") + "</ul>"
    return htmlString
  };

  exports.NoteListView = NoteListView
})(this)