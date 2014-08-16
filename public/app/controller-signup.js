var ctlMod = angular.module( "linksWeb.controller-signup", [] );


ctlMod.controller( "Signup", [ "$scope", "$rootScope", "$location", "API", "ENV",
    function ( $scope, $rootScope, $location, API, ENV ) {

        $scope.signup = {
            identifier: "",
            passowrd: "",
            first_name: "",
            last_name: ""
        };

        $scope.signup = function () {
            API.$post( ENV.apiRoot + "/maker/register", $scope.signup,
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
