var angMod = angular.module( "linksWeb", [
    "ngRoute",
    "linksWeb.service-api",
    "linksWeb.directives",
    "linksWeb.controller-home",
    "linksWeb.controller-login"
] );

angMod.config( [
    "$routeProvider",
    "$locationProvider",
    "$sceDelegateProvider",
    function ( $routeProvider, $locationProvider, $sceDelegateProvider ) {

        $routeProvider.when( "/login", {
            templateUrl: "partials/login",
            controller: "Login"
        } );

        $routeProvider.when( "/", {
            templateUrl: "partials/home",
            controller: "Home"
        } );

        $routeProvider.otherwise( {
            redirectTo: "/"
        } );

        $locationProvider.html5Mode( true );

} ] );
