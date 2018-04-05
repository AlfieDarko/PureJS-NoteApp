(function(exports) {

  var assert = {

    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: expected" + assertionToCheck + " to be true but got false");
      } else {
        console.log("%c Assertion passed!: ",
          'background: green; color: #bada55', assertionToCheck, " is truthy");
      }
    },


    isFalse: function(assertionToCheck) {
      if (assertionToCheck) {
        throw new Error("Assertion failed: expected" + assertionToCheck + " to be false but got true");
      } else {
        console.log("%c Assertion passed!: ",
          'background: green; color: #bada55', assertionToCheck, " is falsey");
      }
    },

    isEqual: function(assertionToCheck1, assertionToCheck2) {
      if (assertionToCheck1 !== assertionToCheck2) {
        throw new Error("Assertion failed: " + assertionToCheck1 + '   &   ' + assertionToCheck2 + "are not equals");
      } else {
        console.log("%c Assertion passed!: ",
          'background: green; color: #bada55', assertionToCheck1, '   &   ', assertionToCheck2, "are equals");
      }
    },

    isNotEqual: function(assertionToCheck1, assertionToCheck2) {
      if (assertionToCheck1 == assertionToCheck2) {
        throw new Error("Assertion failed: " + assertionToCheck1 + '&' + assertionToCheck2 + "are equals");
      } else {
        console.log("%c Assertion passed!: ",
          'background: green; color: #bada55', assertionToCheck1, '&', assertionToCheck2, "are not equals");
      }
    },

    isNull: function(assertionToCheck) {
      if (assertionToCheck !== null) {
        throw new Error("Assertion failed: " + assertionToCheck + "is not null");
      } else {
        console.log("%c Assertion passed!: ",
          'background: green; color: #bada55', assertionToCheck, "is null!");

      }
    },

    isNotNull: function(assertionToCheck) {
      if (assertionToCheck == null) {
        throw new Error("Assertion failed: " + assertionToCheck + "is null");
      } else {
        console.log("%c Assertion passed!: ",
          'background: green; color: #bada55', assertionToCheck, "is not null!");
      }
    },

    arrayIncludes: function(arrayToCheck, wordToCheck) {
      if (!arrayToCheck.includes(wordToCheck)) {
        throw new Error("Assertion failed: " + arrayToCheck + "does not contain" + wordToCheck);
      } else {
        console.log("%c Assertion passed!: ",
          'background: green; color: #bada55', arrayToCheck, "contains", wordToCheck);
      }
    },

    arrayDoesntIncludes: function(arrayToCheck, wordToCheck) {
      if (!arrayToCheck.includes(wordToCheck)) {
        throw new Error("Assertion failed: " + arrayToCheck + "does not contain" + wordToCheck);
      } else {
        console.log("%c Assertion passed!: ",
          'background: green; color: #bada55', arrayToCheck, "contains", wordToCheck);
      }
    },

    hasProperty: function(funcToCheck, propToLookFor) {
      if (!funcToCheck.hasOwnProperty(propToLookFor)) {
        throw new Error("Assertion failed: " + funcToCheck + "does not contain property: " + propToLookFor);
      } else {
        console.log("%c Assertion passed!: ",
          'background: green; color: #bada55', funcToCheck, "contains property called", propToLookFor);
      }
    },

    isArrayEmpty: function(arrayToCheck) {
      if (arrayToCheck.length > 0) {
        throw new Error("Assertion failed: " + arrayToCheck + " is not empty");
      } else {
        console.log("%c Assertion passed!: ",
          'background: green; color: #bada55', arrayToCheck, " is empty");
      }
    },

    doesObjectContain: function(objectToCheck, element) {
      if (!Object.values(objectToCheck).includes(element)) {
        throw new Error("Assertion failed: " + objectToCheck + " doesnt contain " + element);
      } else {
        console.log("%c Assertion passed!: ",
          'background: green; color: #bada55', objectToCheck, " contains ", element);
      }
    },

    doesFunctionExist: function(objectToCheck, funcToLookFor) {
      if (!typeof objectToCheck.funcToLookFor === 'function') {
        throw new Error("Assertion failed: " + objectToCheck + " doesnt contain " + funcToLookFor);
      } else {
        console.log("%c Assertion passed!: ",
          'background: green; color: #bada55', objectToCheck, " contains ", funcToLookFor);
      }
    }
  };

  exports.assert = assert;
})(this)