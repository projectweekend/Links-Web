var ctlMod = angular.module( "linksWeb.controller-signup", [] );


ctlMod.controller( "Signup", [ "$scope", "$rootScope", "$location", "API", "ENV",
    function ( $scope, $rootScope, $location, API, ENV ) {

        $scope.newUser = {
            email: "",
            passowrd: "",
            first_name: "",
            last_name: ""
        };

        $scope.signup = function () {
            API.$post( ENV.apiRoot + "/maker/register", $scope.newUser,
                function ( err, data ) {
                    if ( err ) {
                        console.log( err );
                        console.log( data );
                        return $rootScope.$broadcast( 'error', data );
                    }
                    return $location.path( "/signup/confirm" );
                } );
        };

    } ] );


ctlMod.controller( "SignupConfirm", [ "$scope", function ( $scope ) {

} ] );
