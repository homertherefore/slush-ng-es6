'use strict';

import styles from './<%= compClassName %>.scss';

import angular from 'angular';
//import uirouter from 'angular-ui-router';

import controller from './<%= compClassName %>.controller';
import directive from './<%= compClassName %>.directive';

export default angular.module('app.<%= compClassName %>', [])
  .controller('<%= compClassName %>Controller', controller)
  .directive('<%= compClassName %>', directive)
  .name;
