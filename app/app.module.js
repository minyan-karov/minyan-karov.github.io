angular.module("myApp", ["ngRoute","senagogMap","zmanim"]).controller('ChapterController', function($scope, $routeParams) {
     $scope.params = $routeParams;
 });