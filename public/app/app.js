var angMod = angular.module( "linksWeb", [
    "ngRoute",
    "linksWeb.service-api",
    "linksWeb.directives",
    "linksWeb.controller-home",
    "linksWeb.controller-signup",
    "linksWeb.controller-login",
    "linksWeb.controller-logout",
    "linksWeb.controller-password"
] );

angMod.config( [
    "$routeProvider",
    "$locationProvider",
    "$sceDelegateProvider",
    function ( $routeProvider, $locationProvider, $sceDelegateProvider ) {

        $routeProvider.when( "/", {
            templateUrl: "partials/home",
            controller: "Home"
        } );

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

        $routeProvider.when( "/password/reset/start", {
            templateUrl: "partials/password-reset-start",
            controller: "PasswordResetStart"
        } );

        $routeProvider.when( "/password/reset/finish", {
            templateUrl: "partials/password-reset-finish",
            controller: "PasswordResetFinish"
        } );

        $routeProvider.otherwise( {
            redirectTo: "/"
        } );

} ] );
