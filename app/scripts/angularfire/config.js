angular.module('firebase.config', [])
  .constant('FBURL', 'https://stacks-2014.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','google'])

  .constant('loginRedirectPath', '/login');