'use strict';

export default function <%= compClassName %>($log) {
  'ngInject'; //for ng-annotate

  return {
    restrict: 'A', // allow attribute based includes
    template: require('./<%= compClassName %>.html'), // automatically pulls in the html without need for template caching
    transclude: true,
    scope: {
      //attr: '='
    },
    controller: '<%= compClassName %>Controller',
    controllerAs:'vm',
    link(scope, element, attrs, controller, transcludeFn) {
    }
  }
}
