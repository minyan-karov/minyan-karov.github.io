angular.module("myApp", ["ngRoute","senagogMap"]).controller('ChapterController', function($scope, $routeParams) {
     $scope.params = $routeParams;
 });