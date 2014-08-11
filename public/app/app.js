var angMod = angular.module( "linksWeb", [
    "ngRoute",
    "linksWeb.service-api",
    "linksWeb.directives",
    "linksWeb.controller-home",
    "linksWeb.controller-signup",
    "linksWeb.controller-login",
    "linksWeb.controller-logout"
] );

angMod.config( [
    "$routeProvider",
    "$locationProvider",
    "$sceDelegateProvider",
    function ( $routeProvider, $locationProvider, $sceDelegateProvider ) {

        $routeProvider.when( "/signup", {
            templateUrl: "partials/signup",
            controller: "Signup"
        } );

        $routeProvider.when( "/login", {
            templateUrl: "partials/login",
            controller: "Login"
        } );

        $routeProvider.when( "/logout", {
            templateUrl: "partials/logout",
            controller: "Logout"
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
