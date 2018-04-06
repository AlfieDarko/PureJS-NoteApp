(function(exports) {
  function SingleNoteView(notemodel) {
    this.notemodel = notemodel
  }

  SingleNoteView.prototype.returnHTML = function() {
    return `<div>${this.notemodel.text}</div>`
  };

  exports.SingleNoteView = SingleNoteView;
})(this)