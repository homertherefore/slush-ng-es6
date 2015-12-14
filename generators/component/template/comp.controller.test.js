import comp from './index';

describe('Controller: <%= compClassName %>', function () {
  var $rootScope, $controller, $q, $state, ctrl, auth;

  beforeEach(angular.mock.module(comp));

  beforeEach(angular.mock.inject(function (_$controller_, _$q_, _$rootScope_, _$state_, _auth_) {
    $rootScope = _$rootScope_;
    $q = _$q_;
    $state = _$state_;
    auth = _auth_;
    $controller = _$controller_;
    ctrl = $controller('<%= compClassName %>Controller', {auth: auth});
  }));

  //it('#comp redirects home', function () {
  //  spyOn(auth, 'comp').and.returnValue($q.when());
  //  spyOn($state, 'go');
  //
  //  ctrl.user = {
  //    name: 'user',
  //    pass: 'name'
  //  };
  //
  //  ctrl.comp();
  //
  //  $rootScope.$digest();
  //
  //  expect($state.go).toHaveBeenCalledWith('home');
  //});
});
