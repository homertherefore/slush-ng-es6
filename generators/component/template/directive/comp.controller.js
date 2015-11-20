'use strict';

import angular from 'angular'; // to be able to use angular.element as needed

export default class <%= compClassName %>Controller {
  constructor($log) {
    'ngInject'; //for ng-annotate
    // Assign deps to this controller, so other methods can use these
    this.log = $log.log;
  }

  performAction() {
    this.log('Logs accessible from methods.');
  }
}