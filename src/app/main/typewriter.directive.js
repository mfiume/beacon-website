(function () {
  'use strict';

  angular
    .module('websiteNew')
    .directive('dsTypewriter', dsTypewriter);

  /** @ngInject */
  function dsTypewriter($interval) {
    return {
      restrict: 'E',
      template: "<span></span>",
      scope: {
        source: '='
      },
      link: function (scope,element) {

        activate();

        ////////////

        function activate() {
          blinkAll();
        }

        function blinkAll() {
          var messageIndex = 0;
          var delay = 70;
          var afterDelay = 1200;

          function moveToNextMessage() {
            messageIndex++;
            messageIndex = messageIndex % scope.source.length;
            $interval(function () {
              typeWord(scope.source[messageIndex], moveToNextMessage, delay);
            }, afterDelay, 1);
          }

          typeWord(scope.source[messageIndex], moveToNextMessage, delay);
        }

        function typeWord(text, callback, delay) {
          var iteration = 0;
          var str = '';
          var numIterations = text.length;

          $interval(renderMsgPart, delay, numIterations);

          function renderMsgPart() {
            str += text[iteration];
            element.html(str);

            iteration++;

            if (iteration >= numIterations) {
              callback();
            }
          }
        }
      }
    }
  }
})();
