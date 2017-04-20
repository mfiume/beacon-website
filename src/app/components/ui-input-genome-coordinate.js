(function () {
  'use strict';

  angular.module('websiteNew')
    .directive('bnGenomeCoordinate', coordinateDirective);

  function coordinateDirective(_, bnLocalizedNumber) {

    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {},
      link: function (scope, element, attrs, ngModelCtrl) {

        ngModelCtrl.$formatters.push(formatter);
        ngModelCtrl.$parsers.push(parser);

        ngModelCtrl.$validators.regex = validateRegex;
        ngModelCtrl.$validators.positionNumber = validatePositionNumber;

        ////////////

        function validateRegex(modelValue, viewValue) {
          var match = matchGenomicCoordinates(viewValue);
          return !!match;
        }

        function validatePositionNumber(modelValue) {
          return modelValue && _.isNumber(modelValue.pos) && modelValue.pos >= 0;
        }

        function matchGenomicCoordinates(genomicCoordinates) {
          var regex = /^\s*(\w+)\s*:\s*(.*)\s+(\w+)\s*>\s*(\w+)\s*$/g;
          return regex.exec(genomicCoordinates);
        }

        function parser(viewValue) {
          var match = matchGenomicCoordinates(viewValue);

          if (match) {
            var position = bnLocalizedNumber.parseInt(match[2]);

            if (_.isNumber(position)) {
              return {
                chrom: match[1],
                pos: position,
                allele: match[3],
                ref: match[4]
              };
            }
          }

          return {};
        }

        function formatter(modelValue) {
          if (modelValue && modelValue.chrom && modelValue.pos && modelValue.allele && modelValue.ref) {
            var genomicString = modelValue.chrom + ' : ' + modelValue.pos + ' ' + modelValue.allele + ' > ' + modelValue.ref;
            return genomicString;
          } else {
            return;
          }
        }
      }
    };
  }
}());

