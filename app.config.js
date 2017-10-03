angular.module("myApp").config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue/:bookId/ch/:chapterId", {
        templateUrl : "blue.htm",
        controller: 'ChapterController'
    });
});