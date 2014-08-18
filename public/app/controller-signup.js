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

            if ( $scope.signupForm.$invalid ) {
                $scope.signupForm.submitted = true;
                return;
            }

            API.$post( ENV.apiRoot + "/maker/register", $scope.newUser,
                function ( err, data ) {
                    if ( err ) {
                        return $rootScope.$broadcast( 'error', { errorData: err} );
                    }
                    return $location.path( "/signup/confirm" );
                } );

        };

    } ] );


ctlMod.controller( "SignupConfirm", [ "$scope", "$rootScope", "$location", "API", "ENV",
    function ( $scope, $rootScope, $location, API, ENV ) {

        $scope.code = "";

        $scope.signupConfirm = function () {

            if ( $scope.signupConfirmForm.$invalid ) {
                $scope.signupConfirmForm.submitted = true;
                return;
            }

            var postData = {
                token: $scope.code
            };

            API.$post( ENV.apiRoot + "/maker/email/verification", postData,
                function ( err, data ) {
                     if ( err ) {
                         return $rootScope.$broadcast( 'error', { errorData: err} );
                     }
                     return $location.path( "/login" );
                 } );

        };

    } ] );
