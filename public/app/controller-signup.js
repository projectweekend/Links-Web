var ctlMod = angular.module( "linksWeb.controller-signup", [] );


ctlMod.controller( "Signup", [ "$scope", "$rootScope", "$location", "API", "ENV",
    function ( $scope, $rootScope, $location, API, ENV ) {

        $scope.signupData = {
            username: "",
            passowrd: ""
        };

        $scope.signup = function () {
            API.$post( ENV.apiRoot + "/maker/register", $scope.signupData,
                function ( err, data ) {
                    if ( err ) {
                        return $rootScope.$broadcast( 'error', data );
                    }
                    return $location.path( "/signup/confirm" );
                } );
        };

    } ] );


ctlMod.controller( "SignupConfirm", [ "$scope", function ( $scope ) {

} ] );
