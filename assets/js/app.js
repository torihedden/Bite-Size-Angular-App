var phoneApp = angular.module('phoneApp', ['ngRoute']);

phoneApp.config(function($routeProvider){
$routeProvider
  .when('/home', {
    templateUrl: 'views/contacts.html',
    controller: 'ContactController'
  })

  .when('/call', {
    templateUrl: 'views/dial.html',
    controller: 'DialController'
  })

});
