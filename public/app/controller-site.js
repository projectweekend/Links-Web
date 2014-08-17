var ctlMod = angular.module( "linksWeb.controller-site", [] );


ctlMod.controller( "Site", [ "$scope", "$rootScope", function ( $scope, $rootScope ) {

    $scope.$on( 'error', function ( event, args ) {

        $rootScope.errorMessages = [];

        if ( args.errorData.status === 500 ) {
            $rootScope.errorMessages.push( "A system error occurred" );
            return;
        }

        var errorFields = Object.keys( args.errorData.data );
        var errorDataObj = args.errorData.data;

        for ( var ef = 0; ef < errorFields.length; ef++ ) {
            for ( var em = 0; em < errorDataObj[ errorFields[ ef ] ].length; em++ ) {
                var errorMessage = errorFields[ ef ] + ": " + errorDataObj[ errorFields[ ef ] ][ em ];
                $rootScope.errorMessages.push( errorMessage );
            }
        }

    } );

} ] );
