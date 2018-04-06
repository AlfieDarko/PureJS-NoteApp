(function(exports) {
  function Note(text) {
    this.text = text
    this._id = (function() {
      var id = 0;
      return function() {
        if (arguments[0] === 0) id = 0;
        return id++;
      }
    })();
  }

  exports.Note = Note
})(this)