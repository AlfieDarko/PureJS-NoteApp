(function(exports) {
  function describe(string, itFunc) {
    console.log(string);
    callback(string, itFunc)
  }

  function it(string, assertFunc) {
    console.log(string);
    assertFunc(assert)
  }

  var assert = {

    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("Assertion passed!: " + assertionToCheck + " is truthy");
      }
    },


    isFalse: function(assertionToCheck) {
      if (assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not falsey");
      } else {
        console.log("Assertion passed!: " + assertionToCheck + " is falsey");
      }
    },

    isEqual: function(assertionToCheck1, assertionToCheck2) {
      if (assertionToCheck1 !== assertionToCheck2) {
        throw new Error("Assertion failed: " + assertionToCheck1 + '&' + assertionToCheck2 + "are not equals");
      } else {
        console.log("Assertion passed!: " + assertionToCheck1 + '&' + assertionToCheck2 + "are equals");
      }
    },

    isNotEqual: function(assertionToCheck1, assertionToCheck2) {
      if (assertionToCheck1 == assertionToCheck2) {
        throw new Error("Assertion failed: " + assertionToCheck1 + '&' + assertionToCheck2 + "are equals");
      } else {
        console.log("Assertion passed!: " + assertionToCheck1 + '&' + assertionToCheck2 + "are not equals");
      }
    },

    isNull: function(assertionToCheck) {
      if (assertionToCheck !== null) {
        throw new Error("Assertion failed: " + assertionToCheck + "is not null");
      } else {
        console.log("Assertion passed!: " + assertionToCheck + "is null!");

      }
    },

    isNotNull: function(assertionToCheck) {
      if (assertionToCheck == null) {
        throw new Error("Assertion failed: " + assertionToCheck + "is null");
      } else {
        console.log("Assertion passed!: " + assertionToCheck + "is not null!");
      }
    },

    arrayIncludes: function(arrayToCheck, wordToCheck) {
      if (!assertionToCheck.include(wordToCheck)) {
        throw new Error("Assertion failed: " + assertionToCheck + "does not contain" + wordToCheck);
      } else {
        console.log("Assertion passed: " + assertionToCheck + "contains" + wordToCheck);
      }
    },

    arrayDoesntIncludes: function(arrayToCheck, wordToCheck) {
      if (!assertionToCheck.include(wordToCheck)) {
        throw new Error("Assertion failed: " + assertionToCheck + "does not contain" + wordToCheck);
      } else {
        console.log("Assertion passed: " + assertionToCheck + "contains" + wordToCheck);
      }
    }
  };

  exports.assert = assert;
})(this)