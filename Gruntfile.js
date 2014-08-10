module.exports = function( grunt )
{
    // Project configuration
    grunt.initConfig( {
        pkg: grunt.file.readJSON( "package.json" ),
        watch:
        {
            scripts:
            {
                files: [
                    "public/app/*"
                ],
                tasks: [ "concat:scripts" ]
            }
        },
        uglify:
        {
            options:
            {
                mangle: true,
                compress: true,
                banner: "/*! <%= pkg.name %> <%= grunt.template.today( 'yyyy-mm-dd' ) %> */",
                sourceMap: true,
                sourceMapName: "public/build/project.js.map"
            },
            project:
            {
                files:
                {
                    "public/build/project.js": [
                        "public/app/*"
                    ]
                }
            }
        },
        concat:
        {
            scripts:
            {
                src: [
                    "public/app/*"
                ],
                dest: "public/build/project.js"
            },
            angular:
            {
                src: [
                    "public/bower_components/angular/angular.min.js"
                ],
                dest: "public/build/angular.js"
            }
        }
    } );

    // Load plugins
    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-contrib-uglify" );
    grunt.loadNpmTasks( "grunt-contrib-concat" );

    // Default task(s)
    grunt.registerTask( "default", [
        "concat:scripts",
        "concat:angular"
    ] );

    // Customize deploy task, or add additional deploy tasks for each environment being deployed to
    grunt.registerTask( "deploy",  [
        "uglify",
        "concat:angular"
    ] );

};
