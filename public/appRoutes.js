(function () {
  'use strict';

  angular.module('appRoutes', [])
      .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider

                    // home page
                    .when('/', {
                            templateUrl: 'views/home.html',
                            controller: 'MainController'	
                    })                // home page

                    .when('/nerds', {
                            templateUrl: 'views/nerd.html',
                            controller: 'NerdController'
                    })

                    .when('/geeks', {
                            templateUrl: 'views/geek.html',
                            controller: 'GeekController'	
                    })

                    .when('/swarm', {
                            templateUrl: 'views/swarm.html',
                            controller: 'SwarmController'	
                    });

            $locationProvider.html5Mode(true);

    }]);

}());
