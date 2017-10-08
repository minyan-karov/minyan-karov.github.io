angular.module("myApp").config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/main.htm"
    })
    .when("/red", {
        templateUrl : "app/red.htm"
    })
    .when("/green", {
        templateUrl : "app/green.htm"
    })
    .when("/map", {
        template : '<senagog-map></senagog-map>'
    })
    .when("/zmanim", {
        template : '<zmanim></zmanim>'
    })
    .when("/blue/:bookId/ch/:chapterId", {
        templateUrl : "app/blue.htm",
        controller: 'ChapterController'
    });
});