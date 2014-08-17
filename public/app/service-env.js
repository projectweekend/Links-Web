var svcMod = angular.module( "linksWeb.service-env", [] );


svcMod.factory( 'ENV', function () {
    return {
        apiRoot: "http://192.168.13.81:5000/v1"
    };
} );
