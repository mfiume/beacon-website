(function() {
  'use strict';

  angular.module('websiteNew')
    .service('bnLocalizedNumber', localizedNumberService);

  function localizedNumberService(_) {

    var decimal_point = '.';
    var K_separator = ',';

    return {
      parseInt: parseLocalizedInt
    };

    function parseLocalizedInt(str) {

      // Force string
      var inputString = ('' + str).trim();

      // there should be no decimals
      if (inputString.indexOf(decimal_point) > -1 || ((inputString.indexOf('.') > -1 && K_separator !== '.'))) {
        return null;
      }

      var numericNumbersOnly = inputString.split(K_separator).join('');

      // Using + instead of parseInt, because:
      // +'123fa' -> NaN
      // parseInt('123fa') -> 123
      var numericAsInt = +numericNumbersOnly;
      var numericValid = _.isNumber(numericAsInt);  // parseInt with radix

      // the numericPortion should be a valid number
      if (!numericValid) {
        return null;
      }

      return numericAsInt;
    }
  }

})();
