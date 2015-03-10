'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl',
        replace: true
    });
    $routeProvider.when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl',
        replace: true
    });
    $routeProvider.when('/skills', {
        templateUrl: 'templates/skills.html',
        controller: 'SkillsCtrl',
        replace: true
    });
    $routeProvider.when('/portfolio', {
        templateUrl: 'templates/portfolio.html',
        controller: 'PortfolioCtrl',
        replace: true
    });
    $routeProvider.when('/contacts', {
        templateUrl: 'templates/contacts.html',
        controller: 'ContactsCtrl',
        replace: true
    });
    $routeProvider.otherwise({
        redirectTo: '/home',
        replace: true
    });
}]);
