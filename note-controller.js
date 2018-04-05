window.onload = function() {
  (function(exports) {
    function NoteController() {
      this.notelist = new NoteList()
      this.notelist.createNote('Favourite drink: seltzer')
      this.notelistview = new NoteListView(this.notelist)
    }

    NoteController.prototype.getHTML = function() {
      var html = this.notelistview.returnHTML()
      document.getElementById('list').innerHTML = html
    };

    exports.NoteController = NoteController
  })(this)

  nl = new NoteController()
  nl.getHTML()
}