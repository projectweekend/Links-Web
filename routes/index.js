var express = require('express');
var router = express.Router();


// Serve template partials for the Angular app
router.get( '/partials/:name', function ( req, res ) {
    res.render( 'partials/' + req.params.name );
} );


// Serve the index page for the Angular app
router.get( '*', function ( req, res ) {
    res.render( 'index' );
} );


module.exports = router;
