(function(exports) {
  function Note(text) {
    this.text = text
    this._uid = (function() {
      var id = 0;
      return function() {
        if (arguments[0] === 0) id = 0;
        return id++;
      }
    })();

    this._id = this._uid()
  }

  exports.Note = Note
})(this)