(function(exports) {
  function NoteList() {
    this.notes = []
    this.id = -1


  }

  NoteList.prototype.generateID = function() {
    this.id += 1
    return this.id
  }




  NoteList.prototype.allNotes = function() {
    return this.notes
  };

  NoteList.prototype.createNote = function(string) {
    this.notes.push(new Note(string, this.generateID()))
  };

  exports.NoteList = NoteList
})(this)