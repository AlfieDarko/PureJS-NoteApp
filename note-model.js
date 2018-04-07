(function(exports) {
  function Note(text, id) {
    if (id === undefined) id = 0
    this.text = text

    this._id = id
  }

  exports.Note = Note
})(this)