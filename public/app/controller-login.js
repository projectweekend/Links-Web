var ctlMod = angular.module( "linksWeb.controller-login", [] );


ctlMod.controller( "Login", [ "$scope", "API", function ( $scope, API ) {

    $scope.username = "";
    $scope.password = "";

} ] );
