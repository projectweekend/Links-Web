var angMod = angular.module( "linksWeb", [
    "ngRoute",
    "linksWeb.service-api",
    "linksWeb.service-env",
    "linksWeb.directives",
    "linksWeb.controller-site",
    "linksWeb.controller-home",
    "linksWeb.controller-signup",
    "linksWeb.controller-login",
    "linksWeb.controller-logout",
    "linksWeb.controller-password",
    "linksWeb.controller-email",
    "linksWeb.controller-folders",
    "linksWeb.controller-links"
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

        $routeProvider.when( "/signup/confirm", {
            templateUrl: "partials/signup-confirm",
            controller: "SignupConfirm"
        } );

        $routeProvider.when( "/login", {
            templateUrl: "partials/login",
            controller: "Login"
        } );

        $routeProvider.when( "/logout", {
            templateUrl: "partials/logout",
            controller: "Logout"
        } );

        $routeProvider.when( "/email/change/start", {
            templateUrl: "partials/email-change-start",
            controller: "EmailChangeStart"
        } );

        $routeProvider.when( "/email/change/finish", {
            templateUrl: "partials/email-change-finish",
            controller: "EmailChangeFinish"
        } );

        $routeProvider.when( "/password/change", {
            templateUrl: "partials/password-change",
            controller: "PasswordChange"
        } );

        $routeProvider.when( "/password/reset/start", {
            templateUrl: "partials/password-reset-start",
            controller: "PasswordResetStart"
        } );

        $routeProvider.when( "/password/reset/finish", {
            templateUrl: "partials/password-reset-finish",
            controller: "PasswordResetFinish"
        } );

        $routeProvider.when( "/folders", {
            templateUrl: "partials/folders",
            controller: "Folders"
        } );

        $routeProvider.when( "/links", {
            templateUrl: "partials/links",
            controller: "Links"
        } );

        $routeProvider.otherwise( {
            redirectTo: "/"
        } );

} ] );
