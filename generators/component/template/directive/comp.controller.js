'use strict';

import angular from 'angular'; // to be able to use angular.element as needed

export default class <%= compClassName %>Controller {
  constructor($scope, $log, $sce) {
    'ngInject'; //for ng-annotate

    // Assign deps to this controller, so other methods can use these
    this.$ = $scope;
    this.log = $log.log;
    this.el = ()=> {
      return this.$.el;
    };

    this.html = {
      //title: $sce.trustAsHtml(this.$.title) || '',
    };
  }

  performAction() {
    this.log('Logs accessible from methods.');
  }
}