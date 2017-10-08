angular.module("myApp", ["ngRoute","senagogMap","zmanim","sideNav"]).controller('ChapterController', function($scope, $routeParams) {
     $scope.params = $routeParams;
 });