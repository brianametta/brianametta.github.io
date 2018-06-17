var app = angular.module("portfolio", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/components/about.htm"
    })
    .when("/experience", {
        templateUrl : "app/components/experience.htm"
    })
    .when("/education", {
        templateUrl : "app/components/education.htm"
    })
    .when("/skills", {
        templateUrl : "app/components/skills.htm"
    })
    .when("/interests", {
        templateUrl : "app/components/interests.htm"
    });
});