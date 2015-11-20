'use strict';

import styles from './<%= compName %>.scss';

import angular from 'angular';
//import uirouter from 'angular-ui-router';

import controller from './<%= compName %>.controller';
import directive from './<%= compName %>.directive';

export default angular.module('app.<%= compName %>', [])
  .controller('<%= compClassName %>Controller', controller)
  .directive('<%= compClassName %>', directive)
  .name;
