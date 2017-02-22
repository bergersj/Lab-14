var app = angular.module('myMod', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/dog', {
      controller: 'controllerOne',
      templateUrl: 'dog.html'
    })
    .when('/cat', {
      controller: 'controllerTwo',
      templateUrl: 'cat.html'
    })
    .when('/penguin', {
      controller: 'controllerThree',
      templateUrl: 'penguin.html'
    })
    .when('/giraffe', {
      controller: 'controllerFour',
      templateUrl: 'giraffe.html'
    })
    // .otherwise({redirectTo:'/'});
    $locationProvider.hashPrefix('');
});
