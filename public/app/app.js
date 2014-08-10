var angMod = angular.module( "linksWeb", [
    "ngRoute",
    "linksWeb.services",
    "linksWeb.directives",
    "linksWeb.home-controller",
    "linksWeb.login-controller"
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
